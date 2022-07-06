import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../../reducers';
import { initSagas } from '../../sagas/initSagas';

export default function configureStore(initialState) {
  const shouldHideDevTool = process.env.NODE_ENV === 'production'
    || typeof document === 'undefined'
    || !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  const composeEnhancers = shouldHideDevTool
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // add support for Redux dev tools

  const sagaMiddleware = createSagaMiddleware({
    onError(error) {
      setImmediate(() => {
        throw error;
      });
    }
  });
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant())
    )
  );

  initSagas(sagaMiddleware);

  return store;
}
