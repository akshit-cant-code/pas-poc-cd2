import MomentTimezone from 'moment-timezone';

import { CommonUtil } from '..';

/**
 * Static class that provides static class methods to perform logging operations.
 *
 * @example
 * import { LoggingUtil } from './utils';
 *
 * LoggingUtil.generateCorrelationId("1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"); // CID-1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed-123412341234
 */
class LoggingUtil {
  /**
   *  Returns the generated reference Id based on the user ID, similar to correlation Id with
   *  slight variant in format.
   *
   * @param  {String} currentUserId
   */
  static generateReferenceId(currentUserId) {
    const guid = CommonUtil.getUuid();
    const referenceIdUserId = currentUserId || '0'.padStart(8, '0');
    const guidPrefix = !!guid && guid.length >= 8 ? guid.substring(0, 8) : '0'.padStart(8, '0');
    const referenceIdDateTime = this.getFormattedCurrentDateTime();

    return `${referenceIdUserId}-${referenceIdDateTime}-${guidPrefix}`;
  }

  /**
   * Returns the generated correlationId based user session and tracing IDs.
   *
   * @param  {String} userSessionId
   */
  static generateCorrelationId(userSessionId) {
    const correlationIdDateTime = this.getFormattedCurrentDateTime();

    return `CID-${userSessionId}-${correlationIdDateTime}`;
  }

  /**
   * Returns to formatted date time that will be used as a part of correlation Id.
   */
  static getFormattedCurrentDateTime() {
    const today = new Date();
    const formattedMonth = String(today.getMonth() + 1).padStart(2, '0');
    const formattedDay = String(today.getDate()).padStart(2, '0');
    const formattedHours = String(today.getHours()).padStart(2, '0');
    const formattedMinutes = String(today.getMinutes()).padStart(2, '0');
    const formattedSeconds = String(today.getSeconds()).padStart(2, '0');
    const abbreviatedTimeZone = MomentTimezone()
      .tz(MomentTimezone.tz.guess())
      .format('z');

    return `${today.getFullYear()}${formattedMonth}${formattedDay}${formattedHours}${formattedMinutes}${formattedSeconds}[${abbreviatedTimeZone}]`;
  }
}

/**
 * LoggingUtil class is exported.
 *
 * Only static class members will be accessible from this utility class to ensure
 * only atomic operation can be performed.
 */
export default LoggingUtil;
