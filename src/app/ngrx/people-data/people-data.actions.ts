import { Action } from '@ngrx/store';
import { SwapiPerson } from 'src/app/services/swapi/swapi.interfaces';

export enum actionTypes {
  AppendPeopleData        = '[People Data] Append People Data',
  ResetPeopleData         = '[People Data] Reset People Data',
  FetchPeopleData         = '[People Data] Fetch People Data',
  SetPeopleDataIsLoading  = '[People Data] Set People Data Is Loading',
}

export class AppendPeopleDataAction implements Action {
  public readonly type = actionTypes.AppendPeopleData;
  constructor(public people: SwapiPerson[]) {}
}

export class FetchPeopleDataAction implements Action {
  public readonly type = actionTypes.FetchPeopleData;
  constructor(public url?: string) {}
}

export class ResetPeopleDataAction implements Action {
  public readonly type = actionTypes.ResetPeopleData;
}

export class SetPeopleDataIsLoadingAction implements Action {
  public readonly type = actionTypes.SetPeopleDataIsLoading;
  constructor(public isLoading: boolean) {}
}

export type Actions
  = AppendPeopleDataAction
  | FetchPeopleDataAction
  | ResetPeopleDataAction
  | SetPeopleDataIsLoadingAction;
