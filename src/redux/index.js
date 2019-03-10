import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as rootReducer from './reducers';
import rootSaga from './sagas';

const INIT_STATE = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(rootReducer),
  INIT_STATE,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const actionCreator = (type, payloads) => ({ type, payloads });
export const dispatchAction = (...args) => store.dispatch(...args);
export const action = (type, payloads) => store.dispatch({ type, payloads });
export default store;
