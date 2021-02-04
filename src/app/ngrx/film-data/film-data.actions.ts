import { Action } from '@ngrx/store';
import { SwapiFilm } from 'src/app/services/swapi/swapi.interfaces';

export enum actionTypes {
  AppendFilmData    = '[Film Data] Append Film Data',
  FetchFilmData     = '[Film Data] Fetch Film Data',
  FilmDataFetched   = '[Film Data] Film Data Fetched',
  ResetFilmData     = '[Film Data] Reset Film Data',
  SetFilmsLoading   = '[Film Data] Set Films Loading'
}

export class AppendFilmDataAction implements Action {
  public readonly type = actionTypes.AppendFilmData;
  constructor(public films: SwapiFilm[]) {}
}

export class FetchFilmDataAction implements Action {
  public readonly type = actionTypes.FetchFilmData;
  constructor(public url?: string) {}
}

export class FilmDataFetchedAction implements Action {
  public readonly type = actionTypes.FilmDataFetched;
}

export class ResetFilmDataAction implements Action {
  public readonly type = actionTypes.ResetFilmData;
}

export class SetFilmsLoadingAction implements Action {
  public readonly type = actionTypes.SetFilmsLoading;
  constructor(public isLoading: boolean) {}
}

export type Actions
  = AppendFilmDataAction
  | ResetFilmDataAction
  | FetchFilmDataAction
  | FilmDataFetchedAction
  | SetFilmsLoadingAction;
