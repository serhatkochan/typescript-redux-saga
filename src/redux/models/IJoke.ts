export enum JokeActionTypes {
  GET_JOKE = 'GET_JOKE',
  GET_JOKE_PENDING = 'GET_JOKE_PENDING',
  GET_JOKE_FULFILLED = 'GET_JOKE_FULFILLED',
  GET_JOKE_REJECTED = 'GET_JOKE_REJECTED'
}

export interface IJokeActions {
  type: JokeActionTypes;
  payload?: {
    pending?: any;
    error?: any;
    data?: any;
  }
}

export interface IJokeState {
  pending: boolean;
  error: any;
  data: any;
}

export interface IJokeResponse {
  id: number;
  category: string;
  joke: string;
  lang: string;
}
