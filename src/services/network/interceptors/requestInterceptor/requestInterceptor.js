import { loggingService } from '../../..';
import { APP_CONSTANTS } from '../../../../constants';

/**
 * Returns the http headers that will be sent as part of every network calls made to backend servers
 * by http service.
 *
 * By default x-correlationId header is sent as part of every network call to server.
 * This is required to make sure that the every request made to server must have unique correlation ID.
 *
 * For secured backend apis, all authorization headers must be placed here to ensure every request to
 * backend api server have these security headers.
 */
const getCustomHeaders = () => {
  const headers = {
    'x-correlationId': loggingService.getCorrelationId()
  };

  return headers;
};

/**
 * Called just before the actual network call being made by the http service.
 * This method allows you to configure rules such as URL format, headers, etc that are used to talk to your backend api servers.
 *
 * By default it also send the info logs to logging service to make sure that every network call made by the http service are
 * are correctly logged by logging service.
 *
 * @param  {Object} config
 */
const requestInterceptor = (config) => {
  const event = APP_CONSTANTS.LOGGER.EVENT.HTTP_REQUEST;

  const configCopy = { ...config };

  const headers = getCustomHeaders();

  configCopy.headers = { ...configCopy.headers, ...headers };

  loggingService.logInfo({
    event,
    meta: {
      url: configCopy.url,
      method: configCopy.method
    }
  });

  return configCopy;
};

/**
 * Called immediately after the actual network call being made by the http service and is failed.
 * Any customization to error responses must be done here.
 *
 * @param  {Object} error
 */
const requestErrorHandler = (error) => {
  return Promise.reject(error);
};

export { requestInterceptor, requestErrorHandler };
