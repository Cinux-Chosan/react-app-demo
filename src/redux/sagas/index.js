import { call, put, takeLatest } from 'redux-saga/effects';
import { SAVE_USER_INFO, FETCH_USER_INFO } from '@localActions';
const fetch = (ms, data) =>
  new Promise(res => setTimeout(res.bind(null, data), ms));

function* DemoSaga() {
  const userInfo = yield call(fetch, 1000, { userName: 'demo' });
  yield put({ type: SAVE_USER_INFO, userInfo });
}

export default function* rootSaga() {
  yield takeLatest(FETCH_USER_INFO, DemoSaga);
}
