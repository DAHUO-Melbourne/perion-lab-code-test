import {call, fork, put, takeLatest} from 'redux-saga/effects';
import {
  getSteamUserSummary,
  getSteamUserSummaryLoading,
  getSteamUserSummarySuccess,
  getSteamUserSummaryFail,
  getSteamUserSummaryError,
} from '../actions/summary';
import {
  requestGetUserSummary,
} from '../requests/summary';

export default function* () {
  yield fork(watchGetSteamUserSummary);
};

function* watchGetSteamUserSummary() {
  yield takeLatest(getSteamUserSummary, performGetSteamUserSummary);
};

function* performGetSteamUserSummary(payload: any) {
  try {
    yield put(getSteamUserSummaryLoading({}));
    // @ts-ignore
    const res = yield call(requestGetUserSummary, payload.payload);
    if (res?.code === 200 || res?.code === 204) {
      yield put(getSteamUserSummarySuccess({
        notification: res?.notifications ?? [],
        userLoginId: res?.userLoginId,
        hasUnreadNotification: res?.hasUnreadNotification,
      }));
    } else {
      yield put(getSteamUserSummaryFail());
    }
  } catch (e) {
    yield put(getSteamUserSummaryError());
  }
}
