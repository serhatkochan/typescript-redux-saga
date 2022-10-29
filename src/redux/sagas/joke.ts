import { call, take, put } from 'redux-saga/effects';
import { JokeActionTypes, IJokeActions } from '../models/IJoke';
import { getJokeService } from '../services/joke';
import {actions} from "../index";


const {
  joke: {getJokePending, getJokeRejected, getJokeFulfilled}
} = actions;

const {GET_JOKE} = JokeActionTypes;

export default function* watchJoke() {
  while (true) {
    const action: IJokeActions = yield take([GET_JOKE]);
    switch (action.type) {
      case GET_JOKE:
        yield call(getJokeSaga);
        break;
    }
  }
}

function* getJokeSaga() {
  try {
    yield put(getJokePending());
    const response = yield call(getJokeService)
    if (response) {
      yield put(getJokeFulfilled(response.data));
    } else {
      yield put(getJokeRejected(null));
    }
  } catch (error) {
    yield put(getJokeRejected(error));
  }
}
