import { Action } from '@ngrx/store';
import { Sort } from '@angular/material/sort';

export enum actionTypes {
  FirstPage       = '[Table] Navigate to First Page',
  LastPage        = '[Table] Navigate to Last Page',
  NextPage        = '[Table] Navigate to Next Page',
  PreviousPage    = '[Table] Navigate to Previous Page',
  SetFilterField  = '[Table] Set Filter Field',
  SetFilterQuery  = '[Table] Set Filter Query',
  SetPage         = '[Table] Set Page',
  SetSort         = '[Table] Set Sort',
}

export class FirstPageAction implements Action {
  public readonly type = actionTypes.FirstPage;
}

export class LastPageAction implements Action {
  public readonly type = actionTypes.LastPage;
  constructor() {}
}

export class NextPageAction implements Action {
  public readonly type = actionTypes.NextPage;
}

export class PreviousPageAction implements Action {
  public readonly type = actionTypes.PreviousPage;
}

export class SetFilterFieldAction implements Action {
  public readonly type = actionTypes.SetFilterField;
  constructor(public filterField: string) {}
}

export class SetFilterQueryAction implements Action {
  public readonly type = actionTypes.SetFilterQuery;
  constructor(public filterQuery: string) {}
}

export class SetPageAction implements Action {
  public readonly type = actionTypes.SetPage;
  constructor(public page: number) {
  }
}

export class SetSortAction implements Action {
  public readonly type = actionTypes.SetSort;
  constructor(public sort: Sort) {}
}

export type Actions
  = FirstPageAction
  | LastPageAction
  | NextPageAction
  | PreviousPageAction
  | SetFilterFieldAction
  | SetFilterQueryAction
  | SetPageAction
  | SetSortAction;
