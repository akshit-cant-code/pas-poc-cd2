import i18nReducer from './i18n';
import initialState from '../initialState';
import { i18nActionType } from '../../actions';

describe('This i18n reducer', () => {
  it('should set language', () => {
    const newState = i18nReducer(initialState, { type: 'UNRECOGNIZED_ACTION' });
    expect(newState).toBe(initialState);
  });

  it('should change i18n language on CHANGE_LANGUAGE', () => {
    const i18n = { language: 'en' };

    const newLoadingState = i18nReducer(initialState, {
      type: i18nActionType.CHANGE_LANGUAGE,
      i18n
    });

    expect(newLoadingState.i18n).toEqual(i18n);
  });
});
