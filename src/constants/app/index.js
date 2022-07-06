/**
 * The file contents for the application constants.
 * All the global or application level constants must be place here.
 */

import HTTP_CONSTANTS from '../http';

const APP_CONSTANTS = {
  /**
    Defines constant value for different environment type that will be used
    by config/environment/index.js
  */
  ENVIRONMENT: {
    DEV: 'dev',
    PROD: 'prod',
    QA: 'qa',
    STAGE: 'stage'
  },
  /**
    Defines constant value for route type that will be used for types in
    route configuration routes/app.js
  */
  ROUTE_TYPES: {
    PUBLIC: 'publicRoute'
  },
  /**
    Defines constant value for theme type that will be used by currentTheme redux state.
  */
  THEME: {
    DARK: 'DARK',
    DEFAULT: 'DEFAULT'
  },
  /**
   * Defines constant value for logger that will be used by logging service and utils.
   */
  LOGGER: {
    /**
     * Defines constant value for logger event that will used by request and
     * response interception to log http event info.
     */
    EVENT: {
      HTTP_REQUEST: 'onHttpRequest',
      HTTP_RESPONSE: 'onHttpResponse'
    },
    /**
     * Defines constant value for log level for logger.
     */
    LEVEL: {
      INFO: 'info',
      WARNING: 'warning',
      ERROR: 'error'
    },
    /**
     * Defines constant value for whitelisted http statuses as INFO for logger.
     * Every other error statuses will be considered as errors by logger.
     */
    INFO_STATUSES: [HTTP_CONSTANTS.STATUS_CODES.UNAUTHORIZED]
  },
  /**
    Defines constant value for http method that will be used by http service.
  */
  HTTP: {
    METHOD: {
      GET: 'GET',
      POST: 'POST',
      PUT: 'PUT',
      DELETE: 'DELETE',
      PATCH: 'PATCH'
    }
  },
  /**
    Defines constant value for error type that will be used by error boundary
    for error classification.
  */
  ERROR_TYPE: {
    BackendError: 'BackendError',
    FrontendError: 'FrontendError',
    UnknownError: 'UnknownError'
  }
};

export default APP_CONSTANTS;
