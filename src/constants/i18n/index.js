/**
 * The file contents for the i18n constants.
 * All the I18N related constants must be place here.
 */

const I18N_CONSTANTS = {
  /**
    Defines constant value for i18n namespaces.
    These namespace will categories translations for different application features.
  */
  NAMESPACE: {
    APP: 'app',
    HOME: 'home'
  },
  /**
    Defines constant value for whitelisted namespace for i18n.
  */
  WHITE_LIST_NAMESPACE: ['app', 'home'],
  /**
    Defines constant value for whitelisted language for i18n.
  */
  WHITE_LIST: ['en-US'],
  /**
    Defines constant value for default namespace for i18n.
  */
  DEFAULT_NS: 'app',
  /**
    Defines constant value for default language for i18n.
  */
  DEFAULT_LANGUAGE: 'en-US',
  /**
    Defines constant value for fallback language for i18n.
  */
  FALLBACK_LANGUAGE: 'en-US',
  /**
    Defines constant value for translation request for i18n.
  */
  LOOKUP: 'translations/{{ns}}/{{lng}}.json'
};

export default I18N_CONSTANTS;
