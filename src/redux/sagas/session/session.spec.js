import { currentTheme } from './session';

jest.mock('../../../services', () => {
  return {
    sessionAccountService: {
      setCurrentTheme: jest.fn(),
      getCurrentTheme: jest.fn()
    }
  };
});

describe('Session saga', () => {
  it('It should initiate logout flow', () => {
    const params = {
      theme: 'DEFAULT'
    };
    const generator = currentTheme({ params });
    expect(generator.next().value).toEqual(currentTheme.theme);
  });
});
