/**
 * Entry Point of Application where all the pages and components are loaded.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Switch, withRouter } from 'react-router-dom';
import routes from '../../routes';
import { i18nAction } from '../../redux/actions';
import { I18N_CONSTANTS } from '../../constants';
import { RouteHandler, LoadingIndicator } from '../Common';

/**
 * This is the main app class based component.
 * This is root container component where all the pages and components are loaded.
 *
 * This include the navigation layout and the route config.
 * @example
 * <App />
 */

class App extends Component {
  /**
   * Called to determine whether the change in props and state should trigger a re-render.
   * This is monitoring i18n language redux state props 'state.i18n.language'.
   *
   * When this i18n language is changed, this will trigger a re-render of app component to
   * ensure the changed language is correctly reflected throughout the application.
   *
   * @param {string} prevProps.language - Holds current i18n language
   */
  componentDidUpdate(prevProps) {
    const { language } = prevProps;
    this.updateI18nLanguage(language);
  }
  /**
   * updateI18nLanguage method calls the changeLanguage redux actions to change the current
   * applications i18n language.
   *
   * @param {Object} prevLanguage - Holds current i18n language
   */

  updateI18nLanguage(prevLanguage) {
    const { language, actions } = this.props;

    if (language !== prevLanguage) {
      actions.changeLanguage(language);
    }
  }
  /**
   * Returns the routes based on the route config that need to rendered by the app components.
   *
   * @return {Array} List of Routes that will be rendered by App component.
   */

  renderRoutes() {
    const routesToRender = [
      ...routes.map((route, i) => <RouteHandler key={i} {...route} />)
    ];
    return routesToRender;
  }
  /**
   * Renders the main application layout, this method should re-render only for redux state
   * properties that affects entire application.
   */

  render() {
    const { session } = this.props;
    const currentTheme = session.currentTheme.toLowerCase();
    return (
      <div className={`theme-${currentTheme}`}>
        <div className="app-container">
          <LoadingIndicator key="loading-indicator" />
          <Switch>{this.renderRoutes()}</Switch>
        </div>
      </div>
    );
  }
}
/**
 * PropTypes definition for App component.
 *
 * t: i18n method to render translations.
 * language: Holds current i18n language.
 * changeLanguage: redux action to change current i18n language.
 * session: props that hold session redux state information like currentTheme, etc.
 */

App.propTypes = {
  t: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    changeLanguage: PropTypes.func.isRequired
  }).isRequired,
  session: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired
  }).isRequired
};
/**
 * mapStateToProps method maps i18n language and session redux state properties to props.
 *
 * This is ensure any change to these state properties will trigger re-render of this component.
 */

function mapStateToProps(state) {
  return {
    language: state.i18n.language,
    session: state.session
  };
}
/**
 * mapDispatchToProps method binds i18n redux actions to component's props.
 *
 * This will enable app component to make calls to i18n actions directly from props.
 *
 * eg -
 * this.props.actions.changeLanguage()
 */

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...i18nAction }, dispatch)
  };
}
/**
 * This component as exported with wrappers of react-router's withRouter, redux connect and
 * i18n withTranslation HOCs make use of actions and features provided by them.
 *
 * It uses App namespace for i18n translations.
 */

const component = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default withTranslation(I18N_CONSTANTS.NAMESPACE.APP)(component);
