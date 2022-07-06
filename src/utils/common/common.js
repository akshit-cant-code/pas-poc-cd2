/**
 * Static class that provides static class methods to perform common utility operations.
 *
 * @example
 * import { CommonUtil } from './utils';
 *
 * CommonUtil.getUuid(); // 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
 * CommonUtil.timestamp(); // 12428468123648
 */

class CommonUtil {
  /**
   * Generates a universally unique identifier (UUID) a 128-bit label, generate
   * used to random unique identifiers.
   */
  static getUuid() {
    const s4 = () =>
      Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  /**
   * This method allows to make your JavaScript code wait for certain period of time.
   *
   * @param  {Number} milliseconds - Wait time on milliseconds
   */
  static wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  /**
   * This method allows scroll to top of your page.
   */
  static scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /**
   * Returns the current date timestamp of clients system.
   */
  static timestamp = () => new Date().getTime();

  /**
   * Returns the boolean flag indicating whether application is running on client browser or not.
   */
  static isOnClient = () => typeof window !== "undefined";

  /**
   * Returns the boolean flag indicating whether application is running on server or not.
   */
  static isOnServer = () => typeof window === "undefined";

  /**
   * Returns the boolean flag indicating whether application is running on client's mobile browser or not.
   */
  static isOnMobile = () => {
    const userAgent =
      typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

    const isMobile = Boolean(
      userAgent.match(/iPhone|Android|iPod|Opera Mini|IEMobile/i)
    );

    return isMobile;
  };

  /**
   * Returns the boolean flag indicating whether application is running on Android mobile os or not.
   */
  static isOnAndroid = () => navigator.userAgent.match(/Android/i);

  /**
   * Returns the boolean flag indicating whether application is running on IOS mobile os or not.
   */
  static isOnIOS = () => navigator.userAgent.match(/iPhone/i);
}

/**
 * CommonUtil class is exported.
 *
 * Only static class members will be accessible from this utility class to ensure
 * only atomic operation can be performed.
 */
export default CommonUtil;
