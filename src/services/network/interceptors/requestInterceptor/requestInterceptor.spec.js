import { requestInterceptor, requestErrorHandler } from './requestInterceptor';
import { HTTP_CONSTANTS } from '../../../../constants';

jest.mock('../../../../utils/logging/logging', () => {
  return {
    generateCorrelationId: jest.fn(() => 'mockedCorrelationId')
  };
});

jest.mock('../../../../services/logging/logging', () => {
  return {
    logInfo: jest.fn(),
    getCorrelationId: jest.fn(() => 'mockedCorrelationId')
  };
});

describe('Request interceptors', () => {
  it('should return request configuration with authorization', () => {
    const config = {
      url: 'mockedUrl',
      headers: {
        'Content-Type': 'application/json',
        'x-correlationId': 'mockedCorrelationId'
      }
    };

    expect(requestInterceptor(config)).toEqual(config);
  });

  it('should return request error promise', () => {
    const error = {
      statusText: 'NotFound',
      status: HTTP_CONSTANTS.STATUS_CODES.NOT_FOUND,
      data: {
        message: 'Page not found'
      }
    };

    return requestErrorHandler(error).catch((err) => {
      expect(err.statusText).toBe(error.statusText);
    });
  });
});
