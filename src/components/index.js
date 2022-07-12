/**
 * Main export for react components that will be used across application.
 *
 * eg -
 * import { Home } from './components';
 * import * as Components from './components';
 */
import Home from './Home/Home';
import * as Wildcards from './Wildcards';
import * as Common from './Common';
import Dashboard from '../components/Dashboard/Dashboard'
import QueryPage from '../components/QueryPage/QueryPage'
export { Home, Dashboard,QueryPage,Wildcards, Common };
