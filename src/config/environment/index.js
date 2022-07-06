/**
 * Main export for environment configuration file that will be used across application.
 *
 * eg -
 * import environment from './config/environment';
 */

import devEnvironment from './environment.dev';
import stageEnvironment from './environment.stage';
import qaEnvironment from './environment.qa';
import prodEnvironment from './environment.prod';
import commonEnvironment from './common';
import { APP_CONSTANTS } from '../../constants';

export default ((options) => {
  const environment = options || APP_CONSTANTS.ENVIRONMENT.DEV;
  const ENV = { environment };

  if (environment === APP_CONSTANTS.ENVIRONMENT.DEV) {
    Object.assign(ENV, devEnvironment);
  }

  if (environment === APP_CONSTANTS.ENVIRONMENT.PROD) {
    Object.assign(ENV, prodEnvironment);
  }

  if (environment === APP_CONSTANTS.ENVIRONMENT.QA) {
    Object.assign(ENV, qaEnvironment);
  }

  if (environment === APP_CONSTANTS.ENVIRONMENT.STAGE) {
    Object.assign(ENV, stageEnvironment);
  }

  return Object.assign(commonEnvironment, ENV);
  /**
   * By defaults the application expects APP_ENV environment variable that defines current environment.
   * This can be configured in scripts section of package.json file.
   */
})(process.env.APP_ENV); // eslint-disable-line no-undef
