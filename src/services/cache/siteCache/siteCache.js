import environment from '../../../config/environment';
import {
  cryptoJSService,
  localStorageService,
  sessionStorageService
} from '../..';

/**
 * Singleton class that provided instance methods to perform application's cache operations.
 * Recommended service for all cache related operations that are required by the application.
 *
 * This service has some built-in cache management strategies such as encryption, cache expiry, etc to ensure
 * application cache are well organized.
 *
 * @example
 * import { siteService } from './service';
 *
 * siteService.setPrimaryCache({"foo": "bar"});
 * siteService.getPrimaryCache(); // {"foo": "bar"}
 */
class SiteCacheService {
  /**
   * Defined the primary cache for the application, this cache will not be deleted when the browser is closed,
   * and will be available the next day, week, or year until it met the desired expiry defined in
   * environment config file.
   *
   * By default it is made up of the combining localStorageService and cryptoJSService methods and all the cache
   * data is set under pASUI:primary key of browser's local storage.
   *
   * @param  {Object} data - Cache data that need to be saved in primary cache.
   */
  setPrimaryCache(data) {
    const encryptedData = cryptoJSService.encrypt(
      JSON.stringify(data),
      environment.cache.siteCache.secretKey
    );

    localStorageService.setItemWithExpiry(
      'pASUI:primary',
      encryptedData,
      this.getSiteCacheExpiry()
    );
  }

  /**
   * This method allows you to retrieve primary cache data.
   *
   * If the cache we are trying to retrieve has expired, it will return null and remove the primary cache
   * from local storage.
   */
  getPrimaryCache() {
    const cacheRecord = localStorageService.getItemWithExpiry(
      'pASUI:primary'
    );

    const decryptedCacheRecord = cacheRecord
      && cryptoJSService.decrypt(
        cacheRecord,
        environment.cache.siteCache.secretKey
      );

    return decryptedCacheRecord && JSON.parse(decryptedCacheRecord);
  }

  /**
   * This method removes the primary cache from the local storage.
   */
  clearPrimaryCache() {
    localStorageService.removeItem('pASUI:primary');
  }

  /**
   * This method allows you to retrieve session cache data.
   *
   * If the cache we are trying to retrieve has expired, it will return null and remove the session cache
   * from session storage.
   */
  getSessionCache() {
    const cacheRecord = sessionStorageService.getItem(
      'pASUI:session'
    );

    const decryptedCacheRecord = cacheRecord
      && cryptoJSService.decrypt(
        cacheRecord,
        environment.cache.siteCache.secretKey
      );

    return decryptedCacheRecord && JSON.parse(decryptedCacheRecord);
  }

  /**
   * Defined the session cache for the application, this cache is equal to the primary cache, except that it
   * stores the data for only one session. The data is deleted when the user closes the specific browser tab or
   * until it met the desired expiry defined in environment config file..
   *
   *
   * By default it is made up of the combining sessionStorageService and cryptoJSService methods and all the cache
   * data is set under pASUI:session key of browser's local storage.
   *
   * @param  {Object} data - Cache data that need to be saved in session cache.
   */
  setSessionCache(data) {
    const encryptedData = cryptoJSService.encrypt(
      JSON.stringify(data),
      environment.cache.siteCache.secretKey
    );

    sessionStorageService.setItem(
      'pASUI:session',
      encryptedData,
      this.getSiteCacheExpiry()
    );
  }

  /**
   * This method removes the session cache from the session storage.
   */
  clearSessionCache() {
    sessionStorageService.removeItem('pASUI:session');
  }

  /**
   * Defined the tracing cache for the application, similar to primary cache except it is saved under pASUI:tracing
   * key of browser's local storage. In general it is used from tracing user session information for building correlationId.
   *
   * @param  {Object} data - Cache data that need to be saved in primary cache.
   */
  setSessionTracingCache(data) {
    const encryptedData = cryptoJSService.encrypt(
      JSON.stringify(data),
      environment.cache.siteCache.secretKey
    );

    localStorageService.setItemWithExpiry(
      'pASUI:tracing',
      encryptedData,
      this.getSessionTracingCacheExpiry()
    );
  }

  /**
   * This method allows you to retrieve session tracing cache data.
   *
   * If the cache we are trying to retrieve has expired, it will return null and remove the session tracing cache
   * from local storage.
   */
  getSessionTracingCache() {
    const cacheRecord = localStorageService.getItemWithExpiry(
      'pASUI:tracing'
    );

    const decryptedCacheRecord = cacheRecord
      && cryptoJSService.decrypt(
        cacheRecord,
        environment.cache.siteCache.secretKey
      );

    return decryptedCacheRecord && JSON.parse(decryptedCacheRecord);
  }

  /**
   * This method removes the session tracing cache from the session storage.
   */
  clearSessionTracingCache() {
    localStorageService.removeItem('pASUI:tracing');
  }

  /**
   * Returns the site cache expiry in minute.
   */
  getSiteCacheExpiry() {
    return 3600; // mins
  }

  /**
   * Returns the session tracing cache expiry in minute.
   */
  getSessionTracingCacheExpiry() {
    return 3600; // mins
  }
}

/**
 * Instance of SiteCacheService class is exported.
 *
 * This object lives for the duration of the application, and can be made available in different
 * parts of your application.
 */
export default new SiteCacheService();
