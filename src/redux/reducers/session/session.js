/**
 * The file contents for the session redux reducers that will be used across application.
 * All application specific redux reducers must be placed here.
 *
 *
 * Initial state definition for session actions -
 *  {
 *    session: {
 *      currentTheme: "DEFAULT"
 *    }
 *  }
 *
 * Note - This reducer should only receive updates from session actions defined in redux/actions/session.
 *        This convention is required to enforce dedicated reducer for each actions scopes.
 */

import { sessionActionType } from '../../actions';
import initialState from '../initialState';

/**
 * This reducer method receives an updates from session actions and make updates to redux store's under
 * session property scope.
 *
 * @param  {Object} state=initialState.session - Initial state for session reducer.
 * @param  {Object} action - Returned value from called redux actions.
 */
export default function sessionReducer(state = initialState.session, action) {
  switch (action.type) {
    /**
     * Sets the current theme for the user session
     */
    case sessionActionType.CURRENT_THEME:
      return { ...state, currentTheme: action.theme };
    default:
      return state;
  }
}
