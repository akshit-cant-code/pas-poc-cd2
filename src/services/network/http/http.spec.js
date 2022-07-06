import moxios from 'moxios';
import httpService from './http';
import { HTTP_CONSTANTS } from '../../../constants';

jest.mock('../interceptors', () => jest.fn());

const url = 'mock/test';
const fullApiUrl = `${url}`;

describe('This HTTP service', () => {
  beforeEach(() => {
    // import and pass your custom axios instance to this method
    moxios.install();
  });

  afterEach(() => {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });

  it('should validate get', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: HTTP_CONSTANTS.STATUS_CODES.OK,
        response: { userName: 'mockedUserName' }
      });
    });
    return httpService.get(url, {}, { namespace: true }).then((response) => {
      expect(response.config.method).toBe('get');
      expect(response.request.url).toBe(fullApiUrl);
      expect(response.status).toBe(HTTP_CONSTANTS.STATUS_CODES.OK);
    });
  });

  it('should validate failed get', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: HTTP_CONSTANTS.STATUS_CODES.NOT_FOUND,
        response: { message: 'invalid data' }
      });
    });
    return httpService.get(url).catch((error) => {
      expect(error.config.method).toBe('get');
      expect(error.response.request.url).toBe(fullApiUrl);
      expect(error.response.status).toBe(HTTP_CONSTANTS.STATUS_CODES.NOT_FOUND);
    });
  });

  it('should validate post', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: HTTP_CONSTANTS.STATUS_CODES.OK,
        response: { userName: 'mockedUserName' }
      });
    });
    return httpService.post(url).then((response) => {
      expect(response.config.method).toBe('post');
      expect(response.request.url).toBe(fullApiUrl);
      expect(response.status).toBe(HTTP_CONSTANTS.STATUS_CODES.OK);
    });
  });

  it('should validate failed post', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: HTTP_CONSTANTS.STATUS_CODES.NOT_FOUND,
        response: { message: 'invalid data' }
      });
    });
    return httpService.post(url).catch((error) => {
      expect(error.config.method).toBe('post');
      expect(error.response.request.url).toBe(fullApiUrl);
      expect(error.response.status).toBe(HTTP_CONSTANTS.STATUS_CODES.NOT_FOUND);
    });
  });

  it('should validate put', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: HTTP_CONSTANTS.STATUS_CODES.OK,
        response: { userName: 'mockedUserName' }
      });
    });
    return httpService.put(url).then((response) => {
      expect(response.config.method).toBe('put');
      expect(response.request.url).toBe(fullApiUrl);
      expect(response.status).toBe(HTTP_CONSTANTS.STATUS_CODES.OK);
    });
  });

  it('should validate failed put', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: HTTP_CONSTANTS.STATUS_CODES.NOT_FOUND,
        response: { message: 'invalid data' }
      });
    });
    return httpService.put(url).catch((error) => {
      expect(error.config.method).toBe('put');
      expect(error.response.request.url).toBe(fullApiUrl);
      expect(error.response.status).toBe(HTTP_CONSTANTS.STATUS_CODES.NOT_FOUND);
    });
  });

  it('should validate delete', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: HTTP_CONSTANTS.STATUS_CODES.OK,
        response: { userName: 'mockedUserName' }
      });
    });
    return httpService.delete(url).then((response) => {
      expect(response.config.method).toBe('delete');
      expect(response.request.url).toBe(fullApiUrl);
      expect(response.status).toBe(HTTP_CONSTANTS.STATUS_CODES.OK);
    });
  });

  it('should validate failed delete', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: HTTP_CONSTANTS.STATUS_CODES.NOT_FOUND,
        response: { message: 'invalid data' }
      });
    });
    return httpService.delete(url).catch((error) => {
      expect(error.config.method).toBe('delete');
      expect(error.response.request.url).toBe(fullApiUrl);
      expect(error.response.status).toBe(HTTP_CONSTANTS.STATUS_CODES.NOT_FOUND);
    });
  });
});
