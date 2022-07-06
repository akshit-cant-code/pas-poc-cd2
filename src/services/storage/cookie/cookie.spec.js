import CookieService from './cookie';

jest.mock('js-cookie');

describe('CookieService', () => {
  it('should validate setItem method', () => {
    const key = 'mockedKey';
    const value = 'mockedValue';
    const options = 'mockedOption';

    expect(CookieService.setItem(key, value, options)).toBeUndefined();
  });

  it('should validate getItem method', () => {
    const key = 'mockedKey';
    const expectedResult = undefined;

    expect(CookieService.getItem(key)).toEqual(expectedResult);
  });

  it('should validate removeItem method', () => {
    const key = 'mockedKey';
    const options = 'mockedOption';

    expect(CookieService.removeItem(key, options)).toBeUndefined();
  });
});
