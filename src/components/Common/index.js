/**
 * Main export for Common components that will be used across the application.
 *
 * eg -
 * import { RouteHandler, ErrorBoundary } from './Common';
 * import * as Common from './Common';
 */
import RouteHandler from './Routes/RouteHandler/RouteHandler';
import WelcomePage from './WelcomePage/WelcomePage';
import Login from '../Login/Login'

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import * as Helpers from './Helpers';
import * as FormControls from './FormControls';
import LoadingIndicator from './LoadingIndicator/LoadingIndicator';

export {
  RouteHandler, Login, ErrorBoundary, Helpers, FormControls, LoadingIndicator
};
