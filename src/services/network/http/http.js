import axios from "axios";
import environment from "../../../config/environment";
import { APP_CONSTANTS } from "../../../constants";
import registerInterceptors from "../interceptors";

/**
 * Singleton class that provided instance methods to perform http network operations.
 * It provide wrapper methods over axios library (https://www.npmjs.com/package/axios).
 *
 * @example
 * import { httpService } from './service';
 *
 * Host - http://api.example.com                  // Defined in environment config.
 * Namespace - dev                                // Defined in environment config.
 *
 * httpService.get("/example");
 *
 * Request URL - http://api.example.com/dev/example
 * Request Method - GET
 * Request Headers -
 *     Content-Type: application/json
 *     Cache-Control: no-cache
 *     Pragma: no-cache
 */
class HttpService {
  /**
   * Defines the default base configuration for axios network request calls (https://axios-http.com/docs/req_config).
   */
  baseConfiguration = {
    url: "",
    method: APP_CONSTANTS.HTTP.METHOD.GET,
    baseURL: this.prepareBaseURL(),
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      "Content-Type": "application/json",
    },
  };

  /**
   * Registers the axios interceptor to ensure all network call request/responses must pass
   * through these interceptors (https://axios-http.com/docs/interceptors).
   */
  constructor() {
    registerInterceptors(axios.interceptors);
  }

  /**
   * Performs a GET network request to remote backend api server.
   *
   * @param  {String} url - Relative path to the request url
   * @param  {Object} params - Query params objects
   * @param  {Object} options - Optional axios configuration to override defaults for this service.
   */
  get(url, params = {}, options = {}) {
    const settings = {
      method: APP_CONSTANTS.HTTP.METHOD.GET,
      url,
      params,
      ...options,
    };

    return this.prepareRequest(settings);
  }

  /**
   * Performs a POST network request to remote backend api server.
   *
   * @param  {String} url - Relative path to the request url
   * @param  {Object} data - Request payload object for post calls to backend api server.
   * @param  {Object} params - Query params objects
   * @param  {Object} options - Optional axios configuration to override defaults for this service.
   */
  post(url, data, params = {}, options = {}) {
    const settings = {
      method: APP_CONSTANTS.HTTP.METHOD.POST,
      url,
      data,
      params,
      ...options,
    };

    return this.prepareRequest(settings);
  }

  /**
   * Performs a PUT network request to remote backend api server.
   *
   * @param  {String} url - Relative path to the request url
   * @param  {Object} data - Request payload object for post calls to backend api server.
   * @param  {Object} params - Query params objects
   * @param  {Object} options - Optional axios configuration to override defaults for this service.
   */
  put(url, data, params = {}, options = {}) {
    const settings = {
      method: APP_CONSTANTS.HTTP.METHOD.PUT,
      url,
      data,
      params,
      ...options,
    };

    return this.prepareRequest(settings);
  }

  /**
   * Performs a PATCH network request to remote backend api server.
   *
   * @param  {String} url - Relative path to the request url
   * @param  {Object} data - Request payload object for post calls to backend api server.
   * @param  {Object} params - Query params objects
   * @param  {Object} options - Optional axios configuration to override defaults for this service.
   */
  patch(url, data, params = {}, options = {}) {
    const settings = {
      method: APP_CONSTANTS.HTTP.METHOD.PATCH,
      url,
      data,
      params,
      ...options,
    };

    return this.prepareRequest(settings);
  }

  /**
   * Performs a DELETE network request to remote backend api server.
   *
   * @param  {String} url - Relative path to the request url.
   * @param  {Object} options - Optional axios configuration to override defaults for this service.
   */
  delete(url, options = {}) {
    const settings = {
      method: APP_CONSTANTS.HTTP.METHOD.DELETE,
      url,
      ...options,
    };

    return this.prepareRequest(settings);
  }

  /**
   * Returns the base url for axios request config object based on the network configuration
   * provided in environment config file.
   */
  prepareBaseURL() {
    let baseURL = `${environment.network.host}`;

    if (environment.network.namespaces.v1) {
      baseURL = `${baseURL}/${environment.network.namespaces.v1}`;
    }
    return `${baseURL}/`;
  }

  /**
   * Private method that prepares and returns the axios promise based on the request configuration.
   *
   * In case backend apis have multiple namespaces then they can be set by providing target
   * namespace value in options property on above public http methods
   *
   * @param  {Object} settings
   */
  prepareRequest(settings) {
    const config = { ...this.baseConfiguration, ...settings };

    if (settings.namespace) {
      config.baseURL = `${environment.network.host}/${
        environment.network.namespaces[settings.namespace]
      }/`;
    }
    return this.makeRequest({ ...config });
  }

  /**
   * Private method that returns the axios promise based on the request configuration.
   *
   * This method should only be used explicitly for special network request such as Binary Files,
   * Multipart Requests, etc.
   *
   * @param  {Object} request - Axios request object
   */
  makeRequest(request) {
    return axios({ ...request }).then(
      (response) => response,
      (error) => Promise.reject(error)
    );
  }
}

/**
 * Instance of HttpService class is exported.
 *
 * This object lives for the duration of the application, and can be made available in different
 * parts of your application.
 */
export default new HttpService();
