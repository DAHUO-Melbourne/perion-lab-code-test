import {all} from 'redux-saga/effects';
import summary from './summary';
import games from './games';

export default function* rootSaga() {
  yield all([
    summary(),
    games(),
  ]);
}