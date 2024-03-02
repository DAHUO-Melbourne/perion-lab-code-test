import {call, fork, put, takeLatest} from 'redux-saga/effects';
import {
  getSteamUserGamesList,
  getSteamUserGamesListLoading,
  getSteamUserGamesListClear,
  getSteamUserGamesListSuccess,
  getSteamUserGamesListFail,
  getSteamUserGamesListError,
} from '../actions/games';
import {
  requestGetSteamUserGamesList,
} from '../requests/games';

export default function* gamesSaga() {
  yield fork(watchGetSteamUserGamesList);
};

function* watchGetSteamUserGamesList() {
  yield takeLatest(getSteamUserGamesList, performGetSteamUserGamesList);
};

function* performGetSteamUserGamesList(payload: any) {
  try {
    yield put(getSteamUserGamesListClear({}));
    yield put(getSteamUserGamesListLoading({}));
    // @ts-ignore
    const res = yield call(requestGetSteamUserGamesList, payload.payload);
    if (res?.status === 200) {
      yield put(getSteamUserGamesListSuccess(res.data));
    } else {
      yield put(getSteamUserGamesListFail());
    }
  } catch (e) {
    yield put(getSteamUserGamesListError());
  }
}
