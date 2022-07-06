import browserHistoryService from './browserHistory';

const mockFn = jest.fn();

global.window = Object.create(window);

Object.defineProperty(window, 'location', {
  value: {
    href: 'mockedUrl',
    hash: 'mockedHash',
    port: 'mockedPort',
    host: 'mockedHost',
    hostname: 'mockedHostName',
    origin: 'mockedOrigin',
    protocol: 'mockedProtocol',
    search: '?c=mockedSearch',
    reload: mockFn,
    replace: mockFn
  }
});

Object.defineProperty(window, 'history', {
  value: {
    length: 1,
    state: 'mockedState',
    back: mockFn,
    forward: mockFn,
    go: mockFn
  }
});

describe('SiteCache service', () => {
  it('should get history length by historyListCount method', () => {
    const expectedResult = 1;

    expect(browserHistoryService.historyListCount()).toBe(expectedResult);
  });

  it('should get history state by historyState method', () => {
    const expectedResult = 'mockedState';

    expect(browserHistoryService.historyState()).toBe(expectedResult);
  });

  it('should get window location by currentUrl method', () => {
    const expectedResult = 'mockedUrl';

    expect(browserHistoryService.currentUrl()).toBe(expectedResult);
  });

  it('should get window hash by currentRoute method', () => {
    const expectedResult = 'mockedHash';

    expect(browserHistoryService.currentRoute()).toBe(expectedResult);
  });

  it('should get window port by port method', () => {
    const expectedResult = 'mockedPort';

    expect(browserHistoryService.port()).toBe(expectedResult);
  });

  it('should get window host by host method', () => {
    const expectedResult = 'mockedHost';

    expect(browserHistoryService.host()).toBe(expectedResult);
  });

  it('should get window hostName by hostName method', () => {
    const expectedResult = 'mockedHostName';

    expect(browserHistoryService.hostName()).toBe(expectedResult);
  });

  it('should get window origin by origin method', () => {
    const expectedResult = 'mockedOrigin';

    expect(browserHistoryService.origin()).toBe(expectedResult);
  });

  it('should get window protocol by protocol method', () => {
    const expectedResult = 'mockedProtocol';

    expect(browserHistoryService.protocol()).toBe(expectedResult);
  });

  it('should get window search by search method', () => {
    const expectedResult = '?c=mockedSearch';

    expect(browserHistoryService.search()).toBe(expectedResult);
  });

  it('should get window previousRoute by previousRoute method', () => {
    expect(browserHistoryService.previousRoute()).toBeUndefined();
  });

  it('should get window hash by getCurrentHash method', () => {
    const expectedResult = 'mockedHash';

    expect(browserHistoryService.getCurrentHash()).toBe(expectedResult);
  });

  it('should get window route by nextRoute method', () => {
    browserHistoryService.nextRoute();

    expect(mockFn).toHaveBeenCalled();
  });

  it('should get window history go by goToRoute method', () => {
    browserHistoryService.goToRoute('mockedRoute');

    expect(mockFn).toHaveBeenCalled();
  });

  it('should get window history replace by goToUrl method', () => {
    browserHistoryService.goToUrl('mockedRoute');

    expect(mockFn).toHaveBeenCalled();
  });

  it('should get window history reload by reload method', () => {
    browserHistoryService.reload();

    expect(mockFn).toHaveBeenCalled();
  });

  it('should get window open by open method', () => {
    browserHistoryService.open('mockedUrl', 'mockedName', 'mockedFeatures');

    expect(mockFn).toHaveBeenCalled();
  });
});
