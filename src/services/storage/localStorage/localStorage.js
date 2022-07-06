/**
 * Singleton class that provided instance methods to perform browser's local storage operations.
 *
 * @example
 * import { localStorageService } from './service';
 *
 * localStorageService.setItem("foo", "bar");
 * localStorageService.getItem("foo"); // bar
 */
class LocalStorageService {
  /**
   * This method allows you to remove all the keys from browser's local storage excluding one's
   * that are defined in excludeKeys property.
   *
   * @param  {Array} excludeKeys
   */
  clearStorage(excludeKeys = []) {
    Object.keys(localStorage)
      .filter((key) => !excludeKeys.includes(key))
      .forEach((key) => {
        localStorage.removeItem(key);
      });
  }

  /**
   * This method allows you to retrieve values from browser's local storage.
   *
   * It also provides shouldRemove flag when set to true it will remove value from local
   * storage after reading it's value.
   *
   * @param  {String} key
   * @param  {Boolean} shouldRemove
   */
  getItem(key, shouldRemove) {
    const item = localStorage.getItem(key);

    if (shouldRemove) {
      this.removeItem(key);
    }

    return item;
  }

  /**
   * This method sets key, values to browser's local storage.
   *
   * @param  {String} key
   * @param  {String} value
   */
  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  /**
   * This method removes the key to from local storage.
   *
   * @param  {String} key
   */
  removeItem(key) {
    localStorage.removeItem(key);
  }

  /**
   * This method will empty browser's local storage.
   */
  clear() {
    localStorage.clear();
  }

  /**
   * This method sets key, values along with it's expiry to browser's local storage.
   * Once this value is expired it will be automatically removed from local storage.
   *
   * @param  {String} key
   * @param  {String} value
   * @param  {Number} expiry // In minutes
   */
  setItemWithExpiry(key, value, expiry) {
    const now = new Date();

    const expiresAt = now.getTime() + expiry * 60 * 1000;

    const data = {
      value,
      expiresAt
    };

    this.setItem(key, JSON.stringify(data));
  }

  /**
   * This method allows you to retrieve values from browser's local storage.
   *
   * If the value we are trying to retrieve has expired, it will return null and remove the value
   * from local storage.
   *
   * @param  {String} key
   */
  getItemWithExpiry(key) {
    const item = this.getItem(key);

    if (!item) {
      return null;
    }

    const data = JSON.parse(item);

    const now = new Date();

    if (now.getTime() > data.expiresAt) {
      this.removeItem(key);

      return null;
    }

    return data.value;
  }
}

/**
 * Instance of LocalStorageService class is exported.
 *
 * This object lives for the duration of the application, and can be made available in different parts of your application.
 */
export default new LocalStorageService();
