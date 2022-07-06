import { APP_CONSTANTS } from "../../constants";
import environment from "../../config/environment";
import { sessionAccountService } from "..";
import { LoggingUtil, CommonUtil } from "../../utils";

/**
 * Singleton class that provide instance methods to perform application's logging operations.
 * Recommended service for all logs related operations that are required by the application.
 *
 * This service has well defined error log format and optional bootstrapping information such as pageUrl,
 * stackTrace, payload, etc.
 *
 * eg -
 *
 * Error
 *   - CorrelationId
 *   - ErrorType (Backend|Frontend|Unknown)
 *   - Error Object
 *   - LogLevel
 *   - PageUrl (Optional)
 *   - StackTrack (Optional)
 *   - RequestInfo (URL, METHOD) (Optional)
 *   - Payload (Optional)
 *
 * @example
 * import { loggingService } from './service';
 *
 * loggingService.logError({"error": "Failed"});
 * loggingService.logInfo({"error": "Failed"});
 */
class LoggingService {
  /**
   * This method formats and save the error object that we want to log.
   *
   * @param  {Object} errorInfo - Object containing error log
   */
  logError = (errorInfo) => {
    const errorToLog = this.prepareErrorToLog(errorInfo);

    this.saveErrorLog(errorToLog);

    return errorToLog;
  };

  /**
   * This method formats and save the info object that we want to log.
   *
   * @param  {Object} info - Object containing info log
   */
  logInfo = (info) => {
    const infoToLog = this.prepareInfoToLog(info);

    this.saveInfoLog(infoToLog);

    return infoToLog;
  };

  /**
   * Prepares and returns the formatted info log that will be used by logInfo method above.
   *
   * INFO -
   *   CorrelationID - Unique identifier for logs
   *   BuildVersion - App version defined in the environment config.
   *   LogLevel - Info
   *   PageURL - Current Page URL
   *   Info - Info object that we want to log.
   *
   * @param  {Object} info
   */
  prepareInfoToLog(info) {
    const correlationId = this.getCorrelationId();

    const infoToLog = {
      correlationId: `[${correlationId}]`,
      buildVersion: `[${environment.buildVersion}]`,
      logLevel: "Info",
      pageURL: window.location.href,
      ...info,
    };

    return infoToLog;
  }

  /**
   * Returns the generated correlationId based user session and tracing IDs.
   */
  getCorrelationId() {
    return LoggingUtil.generateCorrelationId(this.getUserId());
  }

  /**
   * Returns the userId generated by combining userSessionId and userTracingId.
   * This is required to generate correlation Id
   *
   * UserSessionId - Part of correlationId that uniquely identifies user session, stored in session storage.
   * UserTracingId - Part of correlationId that uniquely identifies user, stored in local storage.
   */
  getUserId() {
    let sessionId = sessionAccountService.getUserSessionId();

    let tracingId = sessionAccountService.getUserTracingId();

    if (!tracingId) {
      tracingId = Math.floor(Math.random() * 90000000) + 10000000;

      sessionAccountService.setUserTracingId(tracingId);
    }

    if (!sessionId) {
      sessionId = CommonUtil.getUuid();

      sessionAccountService.setUserSessionId(sessionId);
    }

    return `${tracingId}-${sessionId}`;
  }

  /**
   * Prepares and returns the formatted error log that will be used by logError method above.
   *
   * INFO -
   *  CorrelationID - Unique identifier for logs
   *  BuildVersion - App version defined in the environment config.
   *  LogLevel - Info
   *  PageURL - Current Page URL
   *  ErrorType (Backend|Frontend|Unknown)
   *  Error Object
   *  StackTrack (Optional)
   *  RequestInfo (URL, METHOD) (Optional) - Request URL and Method sent by network http service requests.
   *  Payload (Optional) - Request payload sent by network http service post requests.
   *
   * @param  {Object} errorInfo
   */
  prepareErrorToLog(errorInfo) {
    const correlationId = this.getCorrelationId();

    const errorType = this.getErrorType(errorInfo);

    const errorToLog = {
      correlationId: `[${correlationId}]`,
      errorType,
      ...errorInfo,
    };

    errorToLog.logLevel = this.getErrorLogLevel(errorToLog);

    if (environment.logger.extraLogging.additionalInfo) {
      errorToLog.pageURL = window.location.href;

      errorToLog.stack = errorInfo.stack;

      const requestInfo = errorInfo.config
        ? {
            url: errorInfo.config.url,
            type: errorInfo.config.method,
          }
        : null;

      errorToLog.requestInfo = requestInfo;
    }

    if (environment.logger.extraLogging.requestPayload) {
      errorToLog.payload = errorInfo.config ? errorInfo.config.data : null;
    }

    delete errorToLog.config;

    return errorToLog;
  }

  /**
   * This method allows you to save formatted error object to backend server and any other
   * third party integrations such as DataDog, AppInsights ,etc
   *
   * @param  {Object} error - Object containing error log
   */
  saveErrorLog(error) {
    return error;
  }

  /**
   * This method allows you to save formatted info object to backend server and any other
   * third party integrations such as DataDog, AppInsights ,etc
   *
   * @param  {Object} error - Object containing info log
   */
  saveInfoLog(info) {
    return info;
  }

  /**
   * Returns the log level based on the information provided in error Object.
   *
   * By default all 4xx, 5xx http statuses are considered to be an error however you can
   * whitelist some of them as info by add them to 'APP_CONSTANTS.LOGGER.LEVEL.INFO' list.
   *
   * LogLevel
   *   - Info
   *   - Error
   *
   * @param  {Object} errorInfo - Object containing error log
   */
  getErrorLogLevel(errorToLog) {
    const infoLogLevelStatuses = APP_CONSTANTS.LOGGER.INFO_STATUSES;

    let errorLogLevel = APP_CONSTANTS.LOGGER.LEVEL.ERROR;

    if (errorToLog.errorType === APP_CONSTANTS.ERROR_TYPE.BackendError) {
      const status = parseInt(errorToLog.error.status, 10);

      if (infoLogLevelStatuses.includes(status)) {
        errorLogLevel = APP_CONSTANTS.LOGGER.LEVEL.INFO;
      }
    }

    return errorLogLevel;
  }

  /**
   * Returns the error type based on the information provided in error object.
   * It provide high level of errors classification for faster debugging.
   *
   * ErrorType
   *   - BackendError
   *   - FrontendError
   *   - UnknownError
   *
   * @param  {Object} errorInfo - Object containing error log
   */
  getErrorType(errorInfo) {
    const BackendErrorFound =
      errorInfo.error && typeof errorInfo.status === "number";

    const frontendErrorFound = !BackendErrorFound;

    /* eslint-disable no-nested-ternary */
    const errorType = BackendErrorFound
      ? APP_CONSTANTS.ERROR_TYPE.BackendError
      : frontendErrorFound
      ? APP_CONSTANTS.ERROR_TYPE.FrontendError
      : APP_CONSTANTS.ERROR_TYPE.UnknownError;
    /* eslint-enable no-nested-ternary */

    return errorType;
  }
}

/**
 * Instance of LoggingService class is exported.
 *
 * This object lives for the duration of the application, and can be made available in different
 * parts of your application.
 */
export default new LoggingService();
