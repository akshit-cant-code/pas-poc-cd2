import IntlMessageFormat from 'intl-messageformat';

/**
 * Static class that provides static class methods to perform string formatting operations.
 * By default it provide wrapper over utility methods provided by intl-messageformat library
 * (https://www.npmjs.com/package/intl-messageformat).
 *
 * @example
 * import { FormatUtil } from './utils';
 *
 * FormatUtil.formatMessage("Hello {key}", { key: "world" }); // Hello world
 */
class FormatUtil {
  /**
   * This method format the string message as per intl message formats. For more details about formats please refer to the
   * docs for intl-messageformat https://formatjs.io/docs/intl-messageformat
   *
   * eg -
   *   const message = "Hello {key}";
   *
   *   FormatUtil.formatMessage(message, {key: "world"}); // // Hello world
   *
   * @param  {String} message
   * @param  {Object} params
   */
  static formatMessage(message, params) {
    const intlMessageFormat = new IntlMessageFormat(message);

    try {
      return intlMessageFormat.format(params);
    } catch (error) {
      const fallbackParams = {};

      const messageType = 1;

      const fallbackParamList = intlMessageFormat.ast.filter(
        (option) => option.type === messageType
      );

      fallbackParamList.forEach((fallbackParam) => {
        fallbackParams[fallbackParam.value] = params[fallbackParam.value];
      });

      return intlMessageFormat.format(fallbackParams);
    }
  }
}

/**
 * FormatUtil class is exported.
 *
 * Only static class members will be accessible from this utility class to ensure
 * only atomic operation can be performed.
 */
export default FormatUtil;
