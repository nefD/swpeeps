import { createSelector } from '@ngrx/store';
import { getPlanetDataState } from 'src/app/ngrx/index';

export const getPlanetData = createSelector(
  getPlanetDataState,
  (state) => state.planets,
);

export const getPlanetDataIsLoading = createSelector(
  getPlanetDataState,
  (state) => state.isLoading,
);
