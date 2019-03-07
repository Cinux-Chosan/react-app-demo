import { call, put } from 'redux-saga/effects';

const delay = ms => new Promise(res => setTimeout(res, ms));

export default function* rootSaga() {
  yield call(delay, 1000);
  debugger;
}
