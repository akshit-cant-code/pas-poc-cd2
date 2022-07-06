/**
 * Main export for common actions that will be used across the application.
 *
 * eg -
 *   import { commonAction, commonActionType } from './common';
 *
 * Note - Recommended to use de-structured actions from redux action's root exports 'src/redux/actions'
 *
 * eg -
 *   import { commonAction, commonActionType } from './redux/actions';
 */

import commonAction from './action';
import commonActionType from './type';

export { commonAction, commonActionType };
