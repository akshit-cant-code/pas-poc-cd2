import { createStore } from 'redux';
import rootReducer from '../../reducers';
import initialState from '../../reducers/initialState';
import { i18nAction } from '../../actions';

describe('Store', () => {
  it('should change language on changeLanguage action', () => {
    const store = createStore(rootReducer, initialState);
    const loadingIndicator = { language: 'ru' };

    const action = i18nAction.changeLanguage('ru');
    store.dispatch(action);

    const actual = {
      i18n: store.getState().i18n.language
    };

    expect(actual.i18n.language).toEqual(loadingIndicator.isLoading);
  });
});
