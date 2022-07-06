import React from 'react';
import { PropTypes } from 'prop-types';
import { PublicRoute } from '..';
import { APP_CONSTANTS } from '../../../../constants';

/**
 * RouteHandler component, responsible for rendering route wrapped with respective guards as defined in route config.
 * This handler pass the target component to the route guard based on the type property defined in
 * route configuration 'src/routes/app.js'.
 *
 * This behavior can be overridden by adding a specific switch case in the below switch statement
 * to handle specific/new route guard.
 *
 * eg -
 * For authenticated routes, add another case statement in below switch statement that will allow route config object
 * with type property sets to Authenticated and pass target component to Authenticated Guard.
 *
 * These guard are high ordered component that are wrapper over the route that will be rendered by route handler.
 *
 * @example
 * const route = {
 *   path: '/example',
 *   component: Home,
 *   exact: true,
 *   type: 'Public',
 * };
 *
 * <RouteHandler { ...route } />
 */
const RouteHandler = (props) => {
  const { type } = props;

  let Handler;

  switch (type) {
    case APP_CONSTANTS.ROUTE_TYPES.PUBLIC:
      Handler = PublicRoute;
      break;
    default:
      Handler = PublicRoute;
  }

  return <Handler {...props} />;
};

/**
 * Default PropTypes definition for PublicRoute component.
 *
 * routeAccess - Defines the access control property in route config.
 */
RouteHandler.defaultProps = {
  routeAccess: null
};

/**
 * Default PropTypes definition for PublicRoute component.
 *
 * type - Defines the type of route defined in route configuration that will be rendered by RouteHandler.
 * routeAccess - Defines the access control property in route config.
 * path: Defines the url to which target component will be mapped.
 */
RouteHandler.propTypes = {
  type: PropTypes.string.isRequired,
  routeAccess: PropTypes.shape({}),
  path: PropTypes.string.isRequired
};

export default RouteHandler;
