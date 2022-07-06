/**
 * Main export for redux reducers that will be used across the application.
 * Recommended to use de-structured reducers from redux reducer's root exports 'src/redux/reducers'
 *
 * eg -
 *   import { i18n, session, common } from './redux/reducers';
 */
import { combineReducers } from 'redux';
import i18nReducer from './i18n/i18n';
import sessionReducer from './session/session';
import commonReducer from './common/common';
/**
 * This method combines all individual reducers in to root reducers which will be passed redux store.
 * These root reducer's state will be passed to the mapStateToProps method which will further map this state to
 * component's props for their use.
 *
 * eg -
 *
 * function mapStateToProps(state) {
 *   return {
 *     session: state.session
 *   };
 * }
 *
 */

const rootReducer = combineReducers({
  i18n: i18nReducer,
  session: sessionReducer,
  common: commonReducer
});
export default rootReducer;
