import commonAction from './action';
import commonActionType from './type';

describe('Common Action', () => {
  it('should set application error on setApplicationErrorState', () => {
    // arrange
    const error = {
      hasError: false,
      errorInformation: {
        error: 'Bad Request'
      }
    };
    const expectedAction = {
      type: commonActionType.SET_APPLICATION_ERROR_STATE,
      error
    }; // act

    const action = commonAction.setApplicationErrorState(error); // assert

    expect(action).toEqual(expectedAction);
  });
  it('should clear application error on clearApplicationErrorState', () => {
    // arrange
    const error = {
      hasError: false,
      errorInformation: null
    };
    const expectedAction = {
      type: commonActionType.CLEAR_APPLICATION_ERROR_STATE,
      error
    }; // act

    const action = commonAction.clearApplicationErrorState(); // assert

    expect(action).toEqual(expectedAction);
  });
  it('should create a RESTORE_SCROLL action on restoreScroll', () => {
    // arrange
    const scrollIndicator = {
      isRestoring: true
    };
    const expectedAction = {
      type: commonActionType.RESTORE_SCROLL,
      scrollIndicator
    }; // act

    const action = commonAction.restoreScroll(); // assert

    expect(action).toEqual(expectedAction);
  });
  it('should create a RESTORE_SCROLL_SUCCESS action on restoreScrollSuccess', () => {
    // arrange
    const scrollIndicator = {
      isRestoring: false
    };
    const expectedAction = {
      type: commonActionType.RESTORE_SCROLL_SUCCESS,
      scrollIndicator
    }; // act

    const action = commonAction.restoreScrollSuccess(); // assert

    expect(action).toEqual(expectedAction);
  });
  it('should create a SHOW_LOADER action on showLoader', () => {
    const loadingIndicator = {
      isLoading: true,
      loaderMessageParams: undefined
    };
    const expectedAction = {
      type: commonActionType.SHOW_LOADER,
      loadingIndicator
    };
    const action = commonAction.showLoader();
    expect(action).toEqual(expectedAction);
  });
  it('should create a HIDE_LOADER action on hideLoader', () => {
    const loadingIndicator = {
      isLoading: false,
      loaderMessageParams: undefined
    };
    const expectedAction = {
      type: commonActionType.HIDE_LOADER,
      loadingIndicator
    };
    const action = commonAction.hideLoader();
    expect(action).toEqual(expectedAction);
  });
});
