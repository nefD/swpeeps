import * as FilmDataReducer from './film-data/film-data.reducer';
import * as PeopleDataReducer from './people-data/people-data.reducer';
import * as PlanetDataReducer from './planet-data/planet-data.reducer';
import * as TableReducer from '../features/data-table/ngrx/table/table.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  readonly filmData: FilmDataReducer.State;
  readonly peopleData: PeopleDataReducer.State;
  readonly planetData: PlanetDataReducer.State;
  readonly table: TableReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
  filmData: FilmDataReducer.reducer,
  peopleData: PeopleDataReducer.reducer,
  planetData: PlanetDataReducer.reducer,
  table: TableReducer.reducer,
};

export const getFilmDataState = (state: AppState) => state.filmData;
export const getPeopleDataState = (state: AppState) => state.peopleData;
export const getPlanetDataState = (state: AppState) => state.planetData;
export const getTableState = (state: AppState) => state.table;
