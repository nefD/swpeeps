import { Injectable } from '@angular/core';
import {
  select,
  Store,
} from '@ngrx/store';
import { AppState } from 'src/app/ngrx';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import * as DataControlActions from 'src/app/features/data-controls/ngrx/data-controls.actions';
import * as TableActions from './table.actions';
import {
  getTableDataTotalPages,
  getTablePage,
} from './table.selectors';
import {
  map,
  withLatestFrom,
} from 'rxjs/operators';

@Injectable()
export class TableEffects {
  constructor(
    public actions$: Actions,
    public store: Store<AppState>,
  ) {}

  @Effect()
  loadingData$ = this.actions$.pipe(
    ofType<DataControlActions.LoadPeopleAction>(DataControlActions.actionTypes.LoadPeople),
    map(() => new TableActions.SetPageAction(1)),
  );

  @Effect()
  public firstPage$ =  this.actions$.pipe(
    ofType<TableActions.FirstPageAction>(TableActions.actionTypes.FirstPage),
    map(() => new TableActions.SetPageAction(1)),
  );

  @Effect()
  public lastPage$ = ({
    getTableDataTotalPages$ = this.store.pipe(select(getTableDataTotalPages)),
  } = {}) => this.actions$.pipe(
    ofType<TableActions.LastPageAction>(TableActions.actionTypes.LastPage),
    withLatestFrom(getTableDataTotalPages$),
    map(([, totalPages]) => new TableActions.SetPageAction(totalPages)),
  )

  @Effect()
  public nextPage$ = ({
    getTablePage$ = this.store.pipe(select(getTablePage)),
    getTableDataTotalPages$ = this.store.pipe(select(getTableDataTotalPages)),
  } = {}) => this.actions$.pipe(
    ofType<TableActions.NextPageAction>(TableActions.actionTypes.NextPage),
    withLatestFrom(
      getTablePage$,
      getTableDataTotalPages$,
    ),
    map(([, currentPage, totalPages]) => new TableActions.SetPageAction(Math.min(totalPages, currentPage + 1))),
  )

  @Effect()
  public previousPage$ = ({
    getTablePage$ = this.store.pipe(select(getTablePage)),
  } = {}) => this.actions$.pipe(
    ofType<TableActions.PreviousPageAction>(TableActions.actionTypes.PreviousPage),
    withLatestFrom(getTablePage$),
    map(([, page]) => new TableActions.SetPageAction(Math.max(1, page - 1))),
  )
}
