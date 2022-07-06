/**
 * The file contents for the redux initial that will be used by the reducers.
 * All the application initial state must be placed here.

 *
 * Note - All the reducer should only receive initial state from this place only.
 */
export default {
  i18n: {
    language: 'en'
  },
  session: {
    currentTheme: 'DEFAULT'
  },
  common: {
    scrollIndicator: {
      isRestoring: false
    },
    application: {
      hasError: false,
      errorInformation: null
    },
    loadingIndicator: {
      isLoading: false,
      loaderMessageParams: {
        loaderTitle: 'Loading!',
        loaderSubtitle: null
      }
    }
  }
};
