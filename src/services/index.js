/**
 * Main export for services that will be used across application.
 *
 * Service are singleton classes that are used for sharing states between components along with the redux.
 *
 * A Service is a class instance object that lives for the duration of the application, and
 * can be made available in different parts of your application.
 *
 * Services are useful for features that require shared state or persistent connections
 *
 * eg -
 * import { httpService, localStorageService } from './services';
 * import * as services from './services';
 */
import localStorageService from './storage/localStorage/localStorage';
import sessionStorageService from './storage/sessionStorage/sessionStorage';
import sessionAccountService from './sessionAccount/sessionAccount';
import siteCacheService from './cache/siteCache/siteCache';
import cookieService from './storage/cookie/cookie';
import cryptoJSService from './crypto/crypto';
import loggingService from './logging/logging';
import httpService from './network/http/http';
import browserHistoryService from './browserHistory/browserHistory';

export {
  cryptoJSService, loggingService, localStorageService, sessionAccountService, sessionStorageService, siteCacheService, cookieService, httpService, browserHistoryService
};
