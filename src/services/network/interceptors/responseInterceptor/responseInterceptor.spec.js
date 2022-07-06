import {
  responseInterceptor,
  responseErrorHandler
} from './responseInterceptor';

global.Headers = () => {};

jest.mock('../../../../services/logging/logging', () => {
  return {
    logInfo: jest.fn()
  };
});

describe('Response interceptors', () => {
  it('should return response without config', () => {
    const response = {
      data: {
        firstname: 'mockedFirstName',
        lastName: 'mockedLastName'
      },
      headers: {}
    };
    expect(responseInterceptor(response)).toEqual({ ...response });
  });

  it('should return response with config', () => {
    const response = {
      data: {
        firstname: 'mockedFirstName',
        lastName: 'mockedLastName'
      },
      config: {
        url: 'mockedUrl',
        method: 'mockedMethod'
      },
      headers: {}
    };
    expect(responseInterceptor(response)).toEqual({
      data: response.data,
      headers: response.headers
    });
  });

  it('should return error promise', () => {
    const error = {
      message:
        "No HTTP resource was found that matches the request URI 'http://mock.com'",
      response: { status: 404 }
    };

    return responseErrorHandler(error).catch((err) => {
      expect(err.message).toBe(error.message);
    });
  });
});
