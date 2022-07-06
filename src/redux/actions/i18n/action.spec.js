import i18nAction from './action';
import i18nActionType from './type';

describe('I18n action', () => {
  it('should change language on changeLanguage action', () => {
    // arrange
    const i18n = { language: 'ru' };

    const expectedAction = {
      type: i18nActionType.CHANGE_LANGUAGE,
      i18n
    };

    // act
    const action = i18nAction.changeLanguage('ru');

    // assert
    expect(action).toEqual(expectedAction);
  });
});
