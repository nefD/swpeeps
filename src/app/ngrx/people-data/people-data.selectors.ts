import { createSelector } from '@ngrx/store';
import { getPeopleDataState } from 'src/app/ngrx/index';

export const getPeopleData = createSelector(
  getPeopleDataState,
  (state) => state.people,
);

export const getPeopleDataIsLoading = createSelector(
  getPeopleDataState,
  (state) => state.isLoading,
);

export const getPeopleDataCount = createSelector(
  getPeopleDataState,
  (state) => state.recordCount,
);
