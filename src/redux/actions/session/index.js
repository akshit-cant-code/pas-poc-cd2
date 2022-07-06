/**
 * Main export for session actions that will be used across the application.
 *
 * eg -
 *   import { sessionAction, sessionActionType } from './session';
 *
 * Note - Recommended to use de-structured actions from redux action's root exports 'src/redux/actions'
 *
 * eg -
 *   import { sessionAction, sessionActionType } from './redux/actions';
 */

import sessionAction from './action';
import sessionActionType from './type';

export { sessionAction, sessionActionType };
