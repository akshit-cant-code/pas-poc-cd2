import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { commonAction } from '../../../redux/actions';
import { HTTP_CONSTANTS, ROUTE_CONSTANTS } from '../../../constants';
import { loggingService } from '../../../services';
import { Wildcards } from '../..';
import environment from '../../../config/environment';

/**
 * ErrorBoundary component, central place responsible for handling application's error and logs.
 *
 * @example
 * <ErrorBoundary>
 * <App />
 * <ErrorBoundary/>
 */
class ErrorBoundary extends Component {
  /**
   * Sets the initial state for ErrorBoundary and register centralized error
   * handlers for the wrapped components.
   *
   * @param  {Object} props
   * @param  {Object} context
   */
  constructor(props, context) {
    super(props, context);

    this.state = {
      showErrorPage: false,
      correlationId: ''
    };

    this.registerErrorHandler();
  }

  /**
   * Returns an update to a component's state based on its new props and old state.
   *
   * @param  {Object} error
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  /**
   * Catches exceptions generated in descendant components.
   * Unhandled exceptions will cause the entire component tree to unmount.
   *
   * @param  {Object} error
   * @param  {Object} errorInfo
   */
  componentDidCatch(error, errorInfo) {
    return { error, errorInfo };
  }

  /**
   * Error handler method executed after an error has occurred. This method is responsible for
   * taking action whenever an error occurred in the application.
   *
   * By default this method will present <InternalServerError> wildcard component on errors.
   * This behavior can be overridden by adding a specific switch case in the below switch case statement
   * to handle specific errors.
   *
   * For Network Http Statuses -
   *   -  403 - Redirects to /unauthorized wildcard page
   *   -  404 - Redirects to /not-found wildcard page
   *
   * @param  {Object} errorInfo -Formatted error response
   * @param  {String} correlationId - Unique correlationId
   */
  handleErrors(errorInfo, correlationId) {
    const { history } = this.props;

    if (errorInfo) {
      const status = this.getStatusCode(errorInfo);

      switch (status) {
        case HTTP_CONSTANTS.STATUS_CODES.FORBIDDEN:
          history.push(ROUTE_CONSTANTS.WILDCARDS.UNAUTHORIZED);
          break;
        case HTTP_CONSTANTS.STATUS_CODES.NOT_FOUND:
          history.push(ROUTE_CONSTANTS.WILDCARDS.NOT_FOUND);
          break;
        case HTTP_CONSTANTS.STATUS_CODES.INTERNAL_SERVER_ERROR:
          this.setState({
            correlationId,
            showErrorPage: true
          });
          break;
        default:
          this.setState({
            correlationId,
            showErrorPage: true
          });
      }
    }
  }

  /**
   * Called immediately after an error has occurred.
   *
   * This method is responsible for updating redux application error state and logging structured
   * errors response to loggingService along with unique correlationId for tracing purposes.
   *
   * Application logging can be turned off by updating disableExceptionHandling flag to true in
   * environment config file.
   *
   * @param  {Object} errorInfo - Formatted error response
   */
  onError(errorInfo) {
    const { actions } = this.props;

    actions.setApplicationErrorState({
      errorInformation: errorInfo,
      hasError: !!errorInfo
    });

    let correlationId = loggingService.getCorrelationId();

    if (!environment.logger.disableExceptionHandling) {
      const response = loggingService.logError(errorInfo, correlationId);

      correlationId = response.correlationId;
    }

    this.handleErrors(errorInfo, correlationId);
  }

  /**
   * Return status code from error response returned by httpService network calls.
   *
   * @param  {Object} error - Network error response
   */
  getStatusCode(error = {}) {
    if (error.response) {
      return error.response.status;
    }

    return error.status;
  }

  /**
   * This method registers the global error handlers to catch javascript and network rejection.
   *
   * For Javascript error window.onerror method is used to catch all error that occurred
   * within application's window.
   *
   * For Promise rejections unhandledrejection event listener is used to catch all promised rejections
   * eg - network errors.
   *
   */
  registerErrorHandler() {
    window.onerror = (message, source, lineNumber, columnNumber, error) => {
      const errorInfo = {
        message,
        source,
        lineNumber,
        columnNumber,
        error,
        stack: error && error.stack
      };

      if (error && error.isAxiosError) {
        errorInfo.error = error.response.data;
        errorInfo.status = error.response.status;
        errorInfo.config = error.response.config;
      }

      this.onError(errorInfo);
    };

    window.addEventListener('unhandledrejection', (event) => {
      const errorInfo = event.reason.toJSON();
      errorInfo.error = event.reason.response.data;
      errorInfo.status = event.reason.response.status;
      this.onError(errorInfo);
    });
  }

  /**
   * Renders the children that is wrapped by ErrorBoundary.
   *
   * In case of error fallback error component will be displayed instead of child component.
   */
  render() {
    const { children } = this.props;
    const { showErrorPage, correlationId } = this.state;

    return (
      <>
        {showErrorPage ? (
          <Wildcards.InternalServerError correlationId={correlationId} />
        ) : (
          children
        )}
      </>
    );
  }
}

/**
 * mapStateToProps method maps application redux state properties to props.
 *
 * This is ensure any change to this state properties will trigger re-render of this component.
 */
function mapStateToProps(state) {
  return {
    application: state.common.application
  };
}

/**
 * mapDispatchToProps method binds common redux actions to component's props.
 *
 * This will enable ErrorBoundary component to make calls to common actions directly
 * from props.
 *
 * eg -
 * this.props.actions.setApplicationErrorState(params)
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...commonAction }, dispatch)
  };
}

/**
 * Default PropTypes definition for ErrorBoundary component.
 * children - Defines the initial value for child component that will wrapped by ErrorBoundary
 */
ErrorBoundary.defaultProps = {
  children: null
};

/**
 * PropTypes definition for ErrorBoundary component.
 *
 * application - Defines the application state with error information.
 * actions.setApplicationErrorState - redux action to update the application state.
 * history.push - props that hold navigation information and responsible for redirection between pages.
 */
ErrorBoundary.propTypes = {
  application: PropTypes.shape({
    hasError: PropTypes.bool.isRequired,
    errorInformation: PropTypes.shape({
      error: PropTypes.oneOfType([
        PropTypes.shape({
          status: PropTypes.number
        }),
        PropTypes.string
      ])
    })
  }).isRequired,
  actions: PropTypes.shape({
    setApplicationErrorState: PropTypes.func.isRequired
  }).isRequired,
  children: PropTypes.shape({}),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

/**
 * This component as exported with wrappers of react-router's withRouter and redux connect
 * HOCs and make use of actions and features provided by them.
 */
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary)
);
