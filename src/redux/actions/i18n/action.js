/**
 * The file contents for the i18n redux actions that will be used across application.
 * All application specific redux actions must be placed here.
 *
 *
 * Initial state definition for i18n actions -
 *  {
 *    i18n: {
 *      language: "en"
 *    }
 *  }
 *
 * Note - Every i18n actions must update redux state with in the scope i18n property only.
 */

import i18nActionType from './type';

/**
 * This method allows update i18n language.
 *
 * @param  {String} language - I18n language (en, du, etc)
 */
function changeLanguage(language) {
  return { type: i18nActionType.CHANGE_LANGUAGE, i18n: { language } };
}

export default {
  changeLanguage
};
