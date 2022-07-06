import sessionReducer from './session';
import { sessionActionType } from '../../actions';
import initialState from '../initialState';

describe('This session reducer', () => {
  it('should validate session current theme', () => {
    const session = { currentTheme: 'default' };

    const newSessionState = sessionReducer(initialState.session, {
      type: sessionActionType.CURRENT_THEME,
      theme: session.currentTheme
    });

    expect(newSessionState.currentTheme).toEqual(session.currentTheme);
  });
});
