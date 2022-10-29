import {JokeActionTypes, IJokeActions, IJokeState} from "../models/IJoke";

const {GET_JOKE_PENDING, GET_JOKE_REJECTED, GET_JOKE_FULFILLED} = JokeActionTypes;

const initialState: IJokeState = {
  pending: false,
  data: {},
  error: false
}

export const joke = (state: IJokeState = initialState, action: IJokeActions): IJokeState => {
  const {type, payload} = action;
  switch (type) {
    case GET_JOKE_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        data: {}
      }
    case GET_JOKE_FULFILLED:
      return {
        ...state,
        pending: false,
        error: false,
        data: payload
      }
    case GET_JOKE_REJECTED:
      return {
        ...state,
        pending: false,
        error: payload
      }
    default:
      return state
  }
}
