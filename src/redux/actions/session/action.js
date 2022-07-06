/**
 * The file contents for the session redux actions that will be used across application.
 * All application specific redux actions must be placed here.
 *
 *
 * Initial state definition for session actions -
 *  {
 *    session: {
 *      currentTheme: "DEFAULT"
 *    }
 *  }
 *
 * Note - Every session actions must update redux state with in the scope session property only.
 */

import sessionActionType from './type';
/**
 * Sets the current theme in current user session redux state
 *
 * @param  {String} theme - Defined the theme constant value (DEFAULT|DARK)
 */
function currentTheme(theme) {
  return { type: sessionActionType.CURRENT_THEME, theme };
}

export default {
  currentTheme
};
