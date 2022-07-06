import { sessionStorageService, siteCacheService } from "..";
import { APP_CONSTANTS } from "../../constants";

/**
 * Singleton class that provided instance methods to perform user's session operations.
 * Recommended service for all user session related operations that are required by the application.
 *
 * @example
 * import { sessionAccountService } from './service';
 *
 * sessionAccountService.setCurrentTheme("DEFAULT");
 * sessionAccountService.getCurrentTheme(); // "DEFAULT"
 */
class SessionAccountService {
  /**
   * Defined the current theme for the user sessions.
   */
  currentTheme = null;

  /**
   * Sets the current theme for the user sessions.
   *
   * @param {String} theme - Theme constant value defined in src/constants/app/index.js. (DEFAULT|DARK)
   */
  setCurrentTheme(theme) {
    this.currentTheme = theme;
  }

  /**
   * Return the current theme for the user sessions.
   */
  getCurrentTheme() {
    return this.currentTheme;
  }

  /**
   * Sets the previous transition route URL to session storage to enable deep linking functionalities.
   *
   * @param {String} route - Last visited route URL
   */
  setPreviousTransition(route) {
    sessionStorageService.setItem(
      APP_CONSTANTS.PREVIOUS_TRANSITION.STORAGE_KEY,
      route
    );
  }

  /**
   * Returns the previous transition route URL which user has visited in the past. This is used for deep linking
   * features such as redirect back to specific pages after authentication.
   */
  getPreviousTransition() {
    return sessionStorageService.getItem(
      APP_CONSTANTS.PREVIOUS_TRANSITION.STORAGE_KEY
    );
  }

  /**
   * This method clear the previous transition value from the session storage.
   */
  clearPreviousTransition() {
    sessionStorageService.clearStorage();
  }

  /**
   * Defined the primary cache for the user session, this cache will not be deleted when the browser is closed,
   * and will be available the next day, week, or year until it met the desired expiry defined in
   * environment config file.

   * @param  {Object} data - Cache data that need to be saved in primary cache.
   */
  setPrimaryCache(data) {
    return siteCacheService.setPrimaryCache(data);
  }

  /**
   * This method allows you to retrieve primary cache data.
   *
   * If the cache we are trying to retrieve has expired, it will return null and remove the primary cache
   * from local storage.
   */
  getPrimaryCache() {
    return siteCacheService.getPrimaryCache();
  }

  /**
   * This method allows you to retrieve session tracing Id.
   *
   * If the cache we are trying to retrieve has expired, it will return null and remove the session tracing cache
   * from local storage.
   */
  getUserTracingId() {
    const sessionTracingCache = siteCacheService.getSessionTracingCache() || {};

    return sessionTracingCache.tracingId;
  }

  /**
   * Defined the tracing cache for the user session.
   * In general it is used for tracing user session information for building correlationId.
   *
   * @param  {Object} tracingId - Tracing Id generated from logging utils.
   */
  setUserTracingId(tracingId) {
    const sessionTracingCache = siteCacheService.getSessionTracingCache() || {};

    sessionTracingCache.tracingId = tracingId;

    return siteCacheService.setSessionTracingCache(sessionTracingCache);
  }

  /**
   * This method allows you to retrieve user session Id.
   *
   * If the cache we are trying to retrieve has expired, it will return null and remove the user session cache
   * from local storage.
   */
  getUserSessionId() {
    const sessionCache = siteCacheService.getSessionCache() || {};

    return sessionCache.sessionId;
  }

  /**
   * Defined the user session id cache for the user session.
   * In general it is used for unique user session information for building correlationId.
   *
   * @param  {Object} sessionId - User Session Id generated from logging utils.
   */
  setUserSessionId(sessionId) {
    const sessionCache = siteCacheService.getSessionCache() || {};

    sessionCache.sessionId = sessionId;

    return siteCacheService.setSessionCache(sessionCache);
  }
}

/**
 * Instance of SessionAccountService class is exported.
 *
 * This object lives for the duration of the application, and can be made available in different parts
 * of your application.
 */
export default new SessionAccountService();
