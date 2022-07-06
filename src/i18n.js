import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18N_CONSTANTS } from './constants';
import { CommonUtil } from './utils';
import environment from './config/environment';

export default (resources) => {
  const {
    WHITE_LIST,
    FALLBACK_LANGUAGE,
    DEFAULT_LANGUAGE,
    DEFAULT_NS,
    LOOKUP
  } = I18N_CONSTANTS;
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: FALLBACK_LANGUAGE,
      lng: DEFAULT_LANGUAGE,
      debug: environment.i18n.debug,
      whitelist: WHITE_LIST,
      load: 'currentOnly',
      resources,
      ns: DEFAULT_NS,
      appendNamespaceToMissingKey: true,
      interpolation: {
        escapeValue: false
      },
      parseMissingKeyHandler(key) {
        return `missing translation-${key}`;
      },
      backend: {
        loadPath: LOOKUP,
        queryStringParams: { _: CommonUtil.timestamp() }
      }
    });

  return i18n;
};
