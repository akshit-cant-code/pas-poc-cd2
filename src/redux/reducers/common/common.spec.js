import commonReducer from './common';
import { commonActionType } from '../../actions';
import initialState from '../initialState';

describe('This common reducer', () => {
  it('should set application error state on errors', () => {
    const newError = {
      hasError: true,
      errorInformation: {
        status: 500,
        messageText: 'Http error'
      }
    };
    const newState = commonReducer(initialState, {
      type: commonActionType.SET_APPLICATION_ERROR_STATE,
      error: newError
    });
    expect(newState.application).toBe(newError);
    expect(newState.application.errorInformation.status).toBe(500);
    expect(newState.application.hasError).toBe(true);
    expect(newState.application.errorInformation.messageText).toBe(
      'Http error'
    );
  });
  it('should clear application error state on reset error', () => {
    const newError = {
      hasError: false,
      errorInformation: null
    };
    const resetErrorState = commonReducer(initialState, {
      type: commonActionType.CLEAR_APPLICATION_ERROR_STATE,
      error: newError
    });
    expect(resetErrorState.application).toEqual(newError);
    expect(resetErrorState.application.hasError).toBeFalsy();
    expect(resetErrorState.application.errorInformation).toBe(null);
  });
  it('should set application restore scroll on restoreScroll', () => {
    const restoreScroll = {
      isRestoring: true
    };
    const newRestoreScrollState = commonReducer(initialState, {
      type: commonActionType.RESTORE_SCROLL,
      scrollIndicator: restoreScroll
    });
    expect(newRestoreScrollState.scrollIndicator.isRestoring).toBeTruthy();
  });
  it('should reset application restore scroll after restoreScroll completed', () => {
    const restoreScroll = {
      isRestoring: false
    };
    const newRestoreScrollState = commonReducer(initialState, {
      type: commonActionType.RESTORE_SCROLL,
      scrollIndicator: restoreScroll
    });
    const resetRestoreScrollState = commonReducer(newRestoreScrollState, {
      type: commonActionType.RESTORE_SCROLL_SUCCESS,
      scrollIndicator: restoreScroll
    });
    expect(resetRestoreScrollState.scrollIndicator.isRestoring).toBeFalsy();
  });
  it('should reset application loader after loading completed', () => {
    const showLoader = {
      isLoading: false
    };
    const newLoadingState = commonReducer(initialState, {
      type: commonActionType.SHOW_LOADER,
      loadingIndicator: showLoader
    });
    const resetLoadingState = commonReducer(newLoadingState, {
      type: commonActionType.HIDE_LOADER,
      loadingIndicator: initialState.common.loadingIndicator
    });
    expect(resetLoadingState.loadingIndicator.isLoading).toBeFalsy();
  });
  it('should set application loader on loading', () => {
    const showLoader = {
      isLoading: true
    };
    const newLoadingState = commonReducer(initialState, {
      type: commonActionType.SHOW_LOADER,
      loadingIndicator: showLoader
    });
    expect(newLoadingState.loadingIndicator.isLoading).toBeTruthy();
  });
});
