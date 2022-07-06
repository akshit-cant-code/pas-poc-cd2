import sessionAction from './action';
import sessionActionType from './type';

describe('Session Action', () => {
  it('should create a CURRENT_THEME action on siteInformation', () => {
    const currentTheme = 'default';
    const expectedAction = {
      type: sessionActionType.CURRENT_THEME,
      theme: currentTheme
    };

    const action = sessionAction.currentTheme(currentTheme);

    expect(action).toEqual(expectedAction);
  });
});
