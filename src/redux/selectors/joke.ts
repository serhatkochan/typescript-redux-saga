import {createSelector} from 'reselect';

export const selectGetJoke = (state) => state.joke;

export const selectGetJokePending = createSelector(
  [selectGetJoke],
  (selectJoke) => selectJoke.pending,
);

export const selectGetJokeData = createSelector(
  [selectGetJoke],
  (selectJoke) => selectJoke.data,
);

export const selectGetJokeError = createSelector(
  [selectGetJoke],
  (selectJoke) => selectJoke.error,
);
