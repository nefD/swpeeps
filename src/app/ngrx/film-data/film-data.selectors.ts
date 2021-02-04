import { createSelector } from '@ngrx/store';
import { getFilmDataState } from 'src/app/ngrx/index';

export const getFilmData = createSelector(
  getFilmDataState,
  (state) => state.films,
);

export const getFilmDataIsLoading = createSelector(
  getFilmDataState,
  (state) => state.isLoading,
);
