import { Action } from '@ngrx/store';

export enum actionTypes {
  LoadPeople = '[Data-Controls] Load People',
}

export class LoadPeopleAction implements Action {
  public readonly type = actionTypes.LoadPeople;
}

export type Actions
  = LoadPeopleAction;
