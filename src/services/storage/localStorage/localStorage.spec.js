import localStorageService from './localStorage';

describe('Local Storage Service', () => {
  it('should set items on storage', () => {
    const mockData = 'mockData';

    localStorageService.setItem('mockKey', mockData);
    const data1 = localStorageService.getItem('mockKey');
    const data2 = localStorageService.getItem('mockKey', true);
    const data3 = localStorageService.getItem('mockKey');
    expect(data1).toEqual(mockData);
    expect(data2).toEqual(mockData);
    expect(data3).toEqual(null);
  });

  it('should remove item from storage', () => {
    const mockData = 'mockData';

    localStorageService.setItem('mockKey', mockData);
    localStorageService.removeItem('mockKey');
    const data = localStorageService.getItem('mockKey');
    expect(data).toEqual(null);
  });

  it('should clear the storage on clear', () => {
    const mockData = 'mockData';

    localStorageService.setItem('mockKey1', mockData);
    localStorageService.setItem('mockKey2', mockData);
    localStorageService.clear();
    const data1 = localStorageService.getItem('mockKey1');
    const data2 = localStorageService.getItem('mockKey2');
    expect(data1).toEqual(null);
    expect(data2).toEqual(null);
  });

  it('should clear the storage on clearStorage ', () => {
    const mockData = 'mockData';

    localStorageService.setItem('mockKey1', mockData);
    localStorageService.setItem('mockKey2', mockData);
    localStorageService.clearStorage();
    const data1 = localStorageService.getItem('mockKey1');
    const data2 = localStorageService.getItem('mockKey2');
    expect(data1).toEqual(null);
    expect(data2).toEqual(null);
  });

  it('should clear the storage on clearStorage with excluded keys', () => {
    const mockData = 'mockData';

    localStorageService.setItem('mockKey1', mockData);
    localStorageService.setItem('mockKey2', mockData);
    localStorageService.clearStorage(['mockKey1']);
    const data1 = localStorageService.getItem('mockKey1');
    const data2 = localStorageService.getItem('mockKey2');
    expect(data1).toEqual(mockData);
    expect(data2).toEqual(null);
  });
});
