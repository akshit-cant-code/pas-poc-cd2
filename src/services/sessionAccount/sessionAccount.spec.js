import sessionAccountService from './sessionAccount';

describe('Session account service', () => {
  it('should call setCurrentTheme and getCurrentTheme method', () => {
    const themeObject = {
      test: 'mockValue'
    };

    expect(sessionAccountService.setCurrentTheme(themeObject));
    expect(sessionAccountService.getCurrentTheme()).toEqual(themeObject);
  });

  it('should call setPrimaryCache and getPrimaryCache method', () => {
    const cache = {
      test: 'mockValue'
    };
    expect(sessionAccountService.setPrimaryCache(cache));
    expect(sessionAccountService.getPrimaryCache()).toEqual(cache);
  });

  it('should call setUserSessionId and getUserSessionId method', () => {
    const themeObject = {
      test: 'mockValue'
    };

    expect(sessionAccountService.setUserSessionId(themeObject));
    expect(sessionAccountService.getUserSessionId()).toEqual(themeObject);
  });
});
