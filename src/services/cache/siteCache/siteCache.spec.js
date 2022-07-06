import siteCacheService from './siteCache';
import { localStorageService, sessionStorageService } from '../..';

jest.mock('../../storage/localStorage/localStorage', () => {
  return {
    setItemWithExpiry: jest.fn(),
    getItemWithExpiry: jest.fn(),
    removeItem: jest.fn()
  };
});

jest.mock('../../storage/sessionStorage/sessionStorage', () => {
  return {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn()
  };
});

jest.mock('../../crypto/crypto', () => {
  return {
    encrypt: jest.fn((x) => x),
    decrypt: jest.fn((x) => x)
  };
});

describe('SiteCache service', () => {
  it('should set primary site cache on setPrimaryCache', () => {
    const primaryKey = 'pASUI:primary';
    const data = 'mockedValue';
    const expectedResult = '"mockedValue"';

    siteCacheService.setPrimaryCache(data);

    expect(localStorageService.setItemWithExpiry).toHaveBeenCalledWith(
      primaryKey,
      expectedResult,
      3600
    );
  });

  it('should get primary site cache on setPrimaryCache', () => {
    const primaryKey = 'pASUI:primary';

    siteCacheService.getPrimaryCache();

    expect(localStorageService.getItemWithExpiry).toHaveBeenCalledWith(
      primaryKey
    );
  });

  it('should remove primary site cache on clearPrimaryCache', () => {
    const primaryKey = 'pASUI:primary';

    siteCacheService.clearPrimaryCache();

    expect(localStorageService.removeItem).toHaveBeenCalledWith(primaryKey);
  });

  it('should remove primary site cache on clearSessionCache', () => {
    const primaryKey = 'pASUI:session';

    siteCacheService.clearSessionCache();

    expect(sessionStorageService.removeItem).toHaveBeenCalledWith(primaryKey);
  });

  it('should set primary site cache on setItem', () => {
    const primaryKey = 'pASUI:session';
    const data = 'mockedValue';
    const expectedResult = '"mockedValue"';

    siteCacheService.setSessionCache(data);

    expect(sessionStorageService.setItem).toHaveBeenCalledWith(
      primaryKey,
      expectedResult,
      3600
    );
  });

  it('should get primary site cache on getItem', () => {
    const primaryKey = 'pASUI:session';

    siteCacheService.getSessionCache();

    expect(sessionStorageService.getItem).toHaveBeenCalledWith(primaryKey);
  });
});
