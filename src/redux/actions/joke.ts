import {JokeActionTypes, IJokeActions, IJokeResponse} from "../models/IJoke";

const {GET_JOKE, GET_JOKE_PENDING, GET_JOKE_REJECTED, GET_JOKE_FULFILLED} = JokeActionTypes;

export const getJoke = (): IJokeActions => ({
  type: GET_JOKE
})

export const getJokePending = () => ({
  type: GET_JOKE_PENDING
})

export const getJokeFulfilled = (data: IJokeResponse) => ({
  type: GET_JOKE_FULFILLED,
  payload: data
})

export const getJokeRejected = (error: string) => ({
  type: GET_JOKE_REJECTED,
  payload: error
})
