import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

import { CommonUtil } from '../../../../utils';
import { commonAction } from '../../../../redux/actions';

/**
 * ScrollRestoration component, responsible for restoring page scroll on page navigation.
 *
 * It also allow on demand scroll restoration on calling restoreScroll action defined in
 * common redux actions.
 *
 * @example
 * let isRestoring = false;
 *
 * const actions = {
 *   restoreScrollSuccess: () => {
 *    isRestoring = false
 *   }
 * };
 *
 * <ScrollRestoration isRestoring={isRestoring} actions={actions}>
 *   <App />
 * <ScrollRestoration/>
 */
const ScrollRestoration = ({ children, isRestoring, actions }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    /**
     * Calls scrollToTop method defined in common utils when even page url and isRestoring flag is changed.
     * This method is responsible for restoring page scroll.
     */
    CommonUtil.scrollToTop();
    actions.restoreScrollSuccess();
  }, [pathname, isRestoring]);

  return children;
};

/**
 * mapStateToProps method maps isRestoring redux state properties to props.
 *
 * This will ensure any change to this properties will trigger re-render of this component.
 */
function mapStateToProps(state) {
  return {
    isRestoring: state.common.scrollIndicator.isRestoring
  };
}

/**
 * mapDispatchToProps method binds common redux actions to component's props.
 *
 * This will enable ScrollRestoration component to make calls to common actions directly
 * from props.
 *
 * eg -
 * this.props.actions.restoreScrollSuccess(params)
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...commonAction }, dispatch)
  };
}

/**
 * Default PropTypes definition for ScrollRestoration component.
 *
 * children - Defines the initial value for child component that is wrapped by ScrollRestoration component
 */
ScrollRestoration.defaultProps = {
  children: null
};

/**
 * PropTypes definition for ScrollRestoration component.
 *
 * children - Defines the child component that will wrapped by ScrollRestoration component.
 * actions.restoreScrollSuccess - Redux action to update the scroll restoration state.
 * isRestoring - Defined the page restoration state, sets to true when page scroll restoration is in progress.
 */
ScrollRestoration.propTypes = {
  children: PropTypes.shape({}),
  isRestoring: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    restoreScrollSuccess: PropTypes.func.isRequired
  }).isRequired
};

/**
 * This component is exported with wrapper of redux connect
 * HOC and make the use of actions and features provided by them.
 */
export default connect(mapStateToProps, mapDispatchToProps)(ScrollRestoration);
