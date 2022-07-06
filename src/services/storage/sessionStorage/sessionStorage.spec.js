import sessionStorageService from './sessionStorage';

describe('Session Storage Service', () => {
  it('should set items on storage', () => {
    const mockdata = 'mockData';

    sessionStorageService.setItem('mockKey', mockdata);
    const data1 = sessionStorageService.getItem('mockKey');
    const data2 = sessionStorageService.getItem('mockKey', true);
    const data3 = sessionStorageService.getItem('mockKey');
    expect(data1).toEqual(mockdata);
    expect(data2).toEqual(mockdata);
    expect(data3).toEqual(null);
  });

  it('should remove item from storage', () => {
    const mockdata = 'mockData';

    sessionStorageService.setItem('mockKey', mockdata);
    sessionStorageService.removeItem('mockKey');
    const data = sessionStorageService.getItem('mockKey');
    expect(data).toEqual(null);
  });

  it('should clear the storage on clear', () => {
    const mockdata = 'mockData';

    sessionStorageService.setItem('mockKey1', mockdata);
    sessionStorageService.setItem('mockKey2', mockdata);
    sessionStorageService.clear();
    const data1 = sessionStorageService.getItem('mockKey1');
    const data2 = sessionStorageService.getItem('mockKey2');
    expect(data1).toEqual(null);
    expect(data2).toEqual(null);
  });

  it('should clear the storage on clearStorage ', () => {
    const mockdata = 'mockData';

    sessionStorageService.setItem('mockKey1', mockdata);
    sessionStorageService.setItem('mockKey2', mockdata);
    sessionStorageService.clearStorage();
    const data1 = sessionStorageService.getItem('mockKey1');
    const data2 = sessionStorageService.getItem('mockKey2');
    expect(data1).toEqual(null);
    expect(data2).toEqual(null);
  });

  it('should clear the storage on clearStorage with excluded keys', () => {
    const mockdata = 'mockData';

    sessionStorageService.setItem('mockKey1', mockdata);
    sessionStorageService.setItem('mockKey2', mockdata);
    sessionStorageService.clearStorage(['mockKey1']);
    const data1 = sessionStorageService.getItem('mockKey1');
    const data2 = sessionStorageService.getItem('mockKey2');
    expect(data1).toEqual(mockdata);
    expect(data2).toEqual(null);
  });
});
