import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';

/**
 * PublicRoute component is route guard that is responsible for rendering public route.
 * This guard is high ordered component that is wrapper over the route that will be rendered by route handler.
 *
 * @example
 * const route = {
 *   path: '/example',
 *   component: Home,
 *   exact: true,
 *   type: 'Public',
 * };
 *
 * <PublicRoute { ...route } />
 */
const PublicRoute = (props) => {
  const { path, routes } = props;
  const render = (
    subProps // eslint-disable-line react/no-multi-comp
  ) => <props.component {...subProps} routes={routes} />;

  return <Route path={path} render={render} params={useParams()} />;
};

/**
 * Default PropTypes definition for PublicRoute component.
 *
 * routes - Defines the initial value for child component that is wrapped by PublicRoute component
 */
PublicRoute.defaultProps = {
  routes: {}
};

/**
 * Default PropTypes definition for PublicRoute component.
 *
 * routes - Defines the route configuration object.
 * path: Defines the url to which target component will be mapped.
 */
PublicRoute.propTypes = {
  routes: PropTypes.shape({}),
  path: PropTypes.string.isRequired
};

export default PublicRoute;
