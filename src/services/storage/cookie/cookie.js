import Cookies from 'js-cookie';

/**
 * Singleton class that provided instance methods to perform browser's cookie storage operations.
 * It provide wrapper method over js-cookie library (https://www.npmjs.com/package/js-cookie).
 *
 * @example
 * import { cookieService } from './service';
 *
 * cookieService.setItem("foo", "bar");
 * cookieService.getItem("foo"); // bar
 */
class CookieService {
  /**
   * This method allows you to retrieve values from browser's cookie storage
   *
   * @param  {String} key
   */
  getItem(key) {
    return Cookies.get(key);
  }

  /**
   * This method sets key, values based cookies to browser's cookie storage.
   *
   * @param  {String} key
   * @param  {String} value
   * @param  {Object} options
   */
  setItem(key, value, options) {
    Cookies.set(key, value, options);
  }

  /**
   *  * This method remove saved cookies from browser's cookie storage.
   * @param  {String} key
   * @param  {Object} options
   */
  removeItem(key, options) {
    Cookies.remove(key, options);
  }
}

/**
 * Instance of CookieService class is exported.
 *
 * This object lives for the duration of the application, and can be made available in different parts of your application.
 */
export default new CookieService();
