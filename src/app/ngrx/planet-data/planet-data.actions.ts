import { Action } from '@ngrx/store';
import { SwapiPlanet } from 'src/app/services/swapi/swapi.interfaces';

export enum actionTypes {
  AppendPlanetData        = '[Planet Data] Append Planet Data',
  ResetPlanetData         = '[Planet Data] Reset Planet Data',
  FetchPlanetData         = '[Planet Data] Fetch Planet Data',
  PlanetDataFetched       = '[Planet Data] Planet Data Fetched',
  SetPlanetDataIsLoading  = '[Planet Data] Set Planet Data Is Loading',
}

export class AppendPlanetDataAction implements Action {
  public readonly type = actionTypes.AppendPlanetData;
  constructor(public planets: SwapiPlanet[]) {}
}

export class FetchPlanetDataAction implements Action {
  public readonly type = actionTypes.FetchPlanetData;
  constructor(public url?: string) {}
}

export class PlanetDataFetchedAction implements Action {
  public readonly type = actionTypes.PlanetDataFetched;
}

export class ResetPlanetDataAction implements Action {
  public readonly type = actionTypes.ResetPlanetData;
}

export class SetPlanetDataIsLoadingAction implements Action {
  public readonly type = actionTypes.SetPlanetDataIsLoading;
  constructor(public isLoading: boolean) {}
}

export type Actions
  = AppendPlanetDataAction
  | FetchPlanetDataAction
  | PlanetDataFetchedAction
  | ResetPlanetDataAction
  | SetPlanetDataIsLoadingAction;
