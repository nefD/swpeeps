import { createSelector } from '@ngrx/store';
import { getPeopleDataIsLoading } from 'src/app/ngrx/people-data/people-data.selectors';
import { getFilmDataIsLoading } from 'src/app/ngrx/film-data/film-data.selectors';
import { getPlanetDataIsLoading } from 'src/app/ngrx/planet-data/planet-data.selectors';

export const getTableDataIsLoading = createSelector(
  getPeopleDataIsLoading,
  getFilmDataIsLoading,
  getPlanetDataIsLoading,
  (peopleLoading, filmsLoading, planetsLoading) => peopleLoading || filmsLoading || planetsLoading,
);

export const getTableDataLoadingPercent = createSelector(
  getPeopleDataIsLoading,
  getFilmDataIsLoading,
  getPlanetDataIsLoading,
  (peopleLoading, filmsLoading, planetsLoading) => ((3 - +peopleLoading - +filmsLoading - +planetsLoading) / 3) * 100,
);
