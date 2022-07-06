import loggingService from './logging';
import { LoggingUtil } from '../../utils';

jest.mock('../sessionAccount/sessionAccount', () => ({
  siteMetadata: {
    siteCacheExpiry: 20
  },
  getUserSessionId: jest.fn(() => 'mockedUserSessionId'),
  getUserTracingId: jest.fn(() => 'mockedUserTracingId')
}));

const notFoundErrorInfo = {
  message: 'Request failed with status code 404',
  error: {
    status: 404,
    statusText: 'Not Found'
  }
};

const methodNotAllowedErrorInfo = {
  message: 'Request failed with status code 405',
  error: {
    status: 401,
    statusText: 'Method Not Allowed'
  }
};

const frontendErrorInfo = {
  message: 'Uncaught TypeError: this.mockedFunction() is not a function',
  source: '/main.bundle.js',
  lineNumber: 1131,
  columnNumber: 12
};

describe('Logging service', () => {
  it('should return frontend error type', () => {
    expect(loggingService.getErrorType(frontendErrorInfo)).toBe(
      'FrontendError'
    );
  });

  it('should return Backend error type', () => {
    const data = {
      error: 'BackendError',
      status: 401,
      ...frontendErrorInfo
    };

    expect(loggingService.getErrorType(data)).toBe('BackendError');
  });

  it('should save Error log in service', () => {
    const referenceId = LoggingUtil.generateReferenceId(1234);

    expect(loggingService.logError(frontendErrorInfo, referenceId));
  });

  it('should return Error Log Level if FrontendError', () => {
    const errorToLog = {
      referenceId: '[1234-20191226160723[IST]-d6a87b64]',
      errorType: 'FrontendError',
      ...frontendErrorInfo
    };

    expect(loggingService.getErrorLogLevel(errorToLog)).toBe('error');
  });

  it('should return error Log Level if 401 server error', () => {
    const errorToLog = {
      referenceId: '[1234-20191226160723[IST]-d6a87b64]',
      errorType: 'BackendError',
      ...methodNotAllowedErrorInfo
    };

    expect(loggingService.getErrorLogLevel(errorToLog)).toBe('info');
  });

  it('should return error Log Level if 405 server error', () => {
    const errorToLog = {
      referenceId: '[1234-20191226160723[IST]-d6a87b64]',
      errorType: 'BackendError',
      error: { status: 405 }
    };

    expect(loggingService.getErrorLogLevel(errorToLog)).toBe('error');
  });

  it('should prepare errorToLog object for frontend error', () => {
    const referenceId = LoggingUtil.generateReferenceId(1234);
    const errorToLog = loggingService.prepareErrorToLog(
      frontendErrorInfo,
      referenceId
    );

    expect(errorToLog).toHaveProperty('correlationId');
    expect(errorToLog).toHaveProperty('logLevel', 'error');
    expect(errorToLog).toHaveProperty('pageURL');
  });

  it('should prepare errorToLog object for backEnd error', () => {
    const referenceId = LoggingUtil.generateReferenceId(1234);
    const errorToLog = loggingService.prepareErrorToLog(
      notFoundErrorInfo,
      referenceId
    );

    expect(errorToLog).toHaveProperty('correlationId');
    expect(errorToLog).toHaveProperty('logLevel', 'error');
    expect(errorToLog).toHaveProperty('pageURL');
  });
});
