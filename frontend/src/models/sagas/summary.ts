import {call, fork, put, takeLatest} from 'redux-saga/effects';
import {
  getSteamUserSummary,
  getSteamUserSummaryLoading,
  getSteamUserSummaryClear,
  getSteamUserSummarySuccess,
  getSteamUserSummaryFail,
  getSteamUserSummaryError,
} from '../actions/summary';
import {
  requestGetUserSummary,
} from '../requests/summary';

export default function* summarySaga() {
  yield fork(watchGetSteamUserSummary);
};

function* watchGetSteamUserSummary() {
  yield takeLatest(getSteamUserSummary, performGetSteamUserSummary);
};

function* performGetSteamUserSummary(payload: any) {
  try {
    yield put(getSteamUserSummaryClear({}));
    yield put(getSteamUserSummaryLoading({}));
    // @ts-ignore
    const res = yield call(requestGetUserSummary, payload.payload);
    if (res?.status === 200) {
      yield put(getSteamUserSummarySuccess(res.data));
    } else {
      yield put(getSteamUserSummaryFail());
    }
  } catch (e) {
    yield put(getSteamUserSummaryError());
  }
}
