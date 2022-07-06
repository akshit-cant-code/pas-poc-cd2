/**
 * Singleton class that provided instance methods to perform browser's session storage operations.
 *
 * @example
 * import { sessionStorageService } from './service';
 *
 * sessionStorageService.setItem("foo", "bar");
 * sessionStorageService.getItem("foo"); // bar
 */
class SessionStorageService {
  /**
   * This method allows you to remove all the keys from browser's session storage excluding one's
   * that are defined in excludeKeys property.
   *
   * @param  {Array} excludeKeys
   */
  clearStorage(excludeKeys = []) {
    Object.keys(sessionStorage)
      .filter((key) => !excludeKeys.includes(key))
      .forEach((key) => {
        sessionStorage.removeItem(key);
      });
  }

  /**
   * This method allows you to retrieve values from browser's session storage.
   *
   * It also provide shouldRemove flag when set to true it will remove value from session storage
   * after reading it's value.
   *
   * @param  {String} key
   * @param  {Boolean} shouldRemove
   */
  getItem(key, shouldRemove) {
    const item = sessionStorage.getItem(key);

    if (shouldRemove) {
      this.removeItem(key);
    }

    return item;
  }

  /**
   * This method sets key, values to browser's session storage.
   *
   * @param  {String} key
   * @param  {String} value
   */
  setItem(key, value) {
    sessionStorage.setItem(key, value);
  }

  /**
   * This method removes the key to from session storage.
   *
   * @param  {String} key
   */
  removeItem(key) {
    sessionStorage.removeItem(key);
  }

  /**
   * This method will empty browser's session storage.
   */
  clear() {
    sessionStorage.clear();
  }
}

/**
 * Instance of SessionStorageService class is exported.
 *
 * This object lives for the duration of the application, and can be made available in different parts of your application.
 */
export default new SessionStorageService();
