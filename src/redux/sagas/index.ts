import { all, fork } from 'redux-saga/effects';

import watchJoke from "./joke";

export default function* RootSaga() {
  yield all([
    fork(watchJoke)
  ]);
}
