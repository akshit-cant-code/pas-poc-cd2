/**
 * The file contents for the http constants.
 * All the HTTP, NETWORK related constants must be place here.
 */

const HTTP_CONSTANTS = {
  /**
    Defines constant value for http status code.
  */
  STATUS_CODES: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    OK: 200
  },
  /**
    Defines constant value for specific error code that will be used by rest apis
  */
  ERROR_CODES: {
    NOT_AUTHORIZED: 'NotAuthorizedException'
  },
  /**
    Defines constant value for http method that will be used by http service.
  */
  REQUEST_TYPE: {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    PATCH: 'patch'
  }
};

export default HTTP_CONSTANTS;
