import { takeLatest } from 'redux-saga/effects';

import { sessionActionType } from '../../actions';

export function* currentTheme({ theme }) {
  try {
    yield theme;
  } catch (error) {
    Promise.reject(error);
  }
}

export function* watchCurrentTheme() {
  yield takeLatest(sessionActionType.CURRENT_THEME, currentTheme);
}
