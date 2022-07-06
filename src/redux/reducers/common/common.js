/**
 * The file contents for the common redux reducers that will be used across application.
 * All application specific redux reducers must be placed here.
 *
 *
 * Initial state definition for common actions -
 *  {
 *    common: {
 *       scrollIndicator: {
 *          isRestoring: false,
 *       },
 *       application: {
 *          hasError: false,
 *          errorInformation: null,
 *       },
 *    },
 *  }
 *
 * Note - This reducer should only receive updates from common actions defined in redux/actions/common.
 *        This convention is required to enforce dedicated reducer for each actions scopes.
 */
import { commonActionType } from '../../actions';
import initialState from '../initialState';
/**
 * This reducer method receives an updates from common actions and make updates to redux store's under
 * common property scope.
 *
 * @param  {Object} state=initialState.common - Initial state for common reducer.
 * @param  {Object} action - Returned value from called redux actions.
 */

export default function commonReducer(state = initialState.common, action) {
  switch (action.type) {
    case commonActionType.HIDE_LOADER:
      return { ...state, loadingIndicator: action.loadingIndicator };

    case commonActionType.SHOW_LOADER:
      return { ...state, loadingIndicator: action.loadingIndicator };

    /**
     * Sets the application error state on JS/Network error received by Error Boundary.
     */
    case commonActionType.SET_APPLICATION_ERROR_STATE:
      return { ...state, application: action.error };

      /**
     * Reset the application error state.
     */

    case commonActionType.CLEAR_APPLICATION_ERROR_STATE:
      return { ...state, application: action.error };

      /**
     * Sets the application scroll indicator when page scroll is in progress.
     */

    case commonActionType.RESTORE_SCROLL:
      return { ...state, scrollIndicator: action.scrollIndicator };

      /**
     * Reset the application scroll indicator when page scroll is successfully  restored.
     */

    case commonActionType.RESTORE_SCROLL_SUCCESS:
      return { ...state, scrollIndicator: action.scrollIndicator };

    default:
      return state;
  }
}
