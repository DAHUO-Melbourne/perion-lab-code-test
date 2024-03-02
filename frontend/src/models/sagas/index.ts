import {all} from 'redux-saga/effects';
import summary from './summary';

export default function* rootSaga() {
  yield all([
    summary()
  ]);
}