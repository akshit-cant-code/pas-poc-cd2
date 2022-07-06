import { loggingService } from '../../..';
import { APP_CONSTANTS } from '../../../../constants';

/**
 * Called just after the response to the network request made by http service is received.
 *
 * This method allows you to to adjust how the data received from the backend is formatted
 *
 * By default it also send the info logs to logging service to make sure that every response to network call made
 * by the http service are correctly logged by logging service.
 *
 * @param  {Object} config
 */
const responseInterceptor = (response) => {
  const {
    data, headers, config, status
  } = response;

  const event = APP_CONSTANTS.LOGGER.EVENT.HTTP_RESPONSE;

  if (config) {
    loggingService.logInfo({
      event,
      meta: {
        url: config.url,
        status,
        method: config.method
      }
    });
  }

  return { data, headers };
};

/**
 * Called immediately after the actual network call being made by the http service and is failed.
 * Any customization to error responses and formats must be done here.
 *
 * @param  {Object} error
 */
const responseErrorHandler = (error) => {
  const errorObject = { ...error, status: error.response.status };
  return Promise.reject(errorObject);
};

export { responseInterceptor, responseErrorHandler };
