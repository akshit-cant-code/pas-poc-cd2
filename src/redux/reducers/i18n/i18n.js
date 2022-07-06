/**
 * The file contents for the i18n redux reducers that will be used across application.
 * All application specific redux reducers must be placed here.
 *
 *
 * Initial state definition for i18n actions -
 *  {
 *    i18n: {
 *      language: "en"
 *    }
 *  }
 *
 * Note - This reducer should only receive updates from i18n actions defined in redux/actions/i18n.
 *        This convention is required to enforce dedicated reducer for each actions scopes.
 */

import initialState from '../initialState';
import { i18nActionType } from '../../actions';

/**
 * This reducer method receives an updates from i18n actions and make updates to redux store's under
 * i18n property scope.
 *
 * @param  {Object} state=initialState.i18n - Initial state for i18n reducer.
 * @param  {Object} action - Returned value from called redux actions.
 */
export default function i18nReducer(state = initialState.i18n, action) {
  switch (action.type) {
    /**
     * Sets the current i18n language
     */
    case i18nActionType.CHANGE_LANGUAGE:
      return { ...state, ...action.i18n };
    default:
      return state;
  }
}
