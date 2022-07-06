/**
 * The file contents for the common redux actions that will be used across application.
 * All application specific redux actions must be placed here.
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
 * Note - Every common actions must update redux state with in the scope common property only.
 */
import commonActionType from './type';
/**
 * This method allows you to restore page scroll.
 */

function restoreScroll() {
  return {
    type: commonActionType.RESTORE_SCROLL,
    scrollIndicator: {
      isRestoring: true
    }
  };
}
/**
 * Called when page scroll restore is completed.
 */

function restoreScrollSuccess() {
  return {
    type: commonActionType.RESTORE_SCROLL_SUCCESS,
    scrollIndicator: {
      isRestoring: false
    }
  };
}
/**
 * Sets the application error state, called from error boundary when application is in error state.

 * @param  {Object} error - Object containing error information
 */

function setApplicationErrorState(error) {
  return {
    type: commonActionType.SET_APPLICATION_ERROR_STATE,
    error
  };
}
/**
 * Clears the application error state.
 */

function clearApplicationErrorState() {
  const error = {
    hasError: false,
    errorInformation: null
  };
  return {
    type: commonActionType.CLEAR_APPLICATION_ERROR_STATE,
    error
  };
}

function showLoader(loaderMessageParams) {
  return {
    type: commonActionType.SHOW_LOADER,
    loadingIndicator: {
      isLoading: true,
      loaderMessageParams
    }
  };
}

function hideLoader(loaderMessageParams) {
  return {
    type: commonActionType.HIDE_LOADER,
    loadingIndicator: {
      isLoading: false,
      loaderMessageParams
    }
  };
}

export default {
  restoreScroll,
  restoreScrollSuccess,
  setApplicationErrorState,
  clearApplicationErrorState,
  showLoader,
  hideLoader
};
