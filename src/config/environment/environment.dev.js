/**
 * The file contents for the current environment will overwrite these during the build.
 *
 * The build system defaults to the dev environment which uses `environment.dev.js`, but if you do
 * `npm start prod then `environment.prod.ts` will be used instead.
 */

export default {
  /**
   * Defines the environment for the app.
   */
  environment: 'dev',
  /**
   * Defines i18n configurations -
   *
   * debug - If `true`, i18n will run on debug mode.
   */
  i18n: {
    debug: true
  },
  /**
   * Defines http service configuration -
   *
   * host - Defines the domain name or IP address (IPv4) of the host that serves the API. eg - http://api.example.com.
   *        If the host is not specified, it is assumed to be the same host where the application is being served.
   * namespaces - Namespaces is the URL prefix for all API paths, relative to the host root. eg - v1, /api/v2.
   * Note - All API paths are relative to this base configuration, for example, /users actually means <host>/<namespaces>/users.
   */
  network: {
    host: '',
    namespaces: {
      v1: 'dev'
    }
  },
  /**
   * Defines logger configuration -
   *
   * disableExceptionHandling - If `true`, application logging will be disabled.
   * serverEndPoint: Defines the server endpoint where application logs will be sent for all supported log levels (info, error)
   * extraLogging: This will enable extra logs information for the application
   *    additionalInfo - This will log API and page information along with the exception
   *    requestPayload - This will add request body payload in the logs for API failures. By default, it is set to false.
   */
  logger: {
    disableExceptionHandling: false,
    serverEndPoint: {
      info: 'log/info',
      error: 'log/error'
    },
    extraLogging: {
      additionalInfo: true,
      requestPayload: false
    }
  },
  /**
   * Defines application cache configuration -
   *
   * secretKey - This is required to encrypt/decrypt sensitive information that will be saved in the browser's storages
   *
   * eg -
   * localStorage, sessionStorage, cookies etc.
   */
  cache: {
    siteCache: {
      secretKey: '5d3a5da0-03c6'
    }
  }
};