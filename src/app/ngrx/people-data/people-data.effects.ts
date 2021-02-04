import { Injectable } from '@angular/core';
import {
  Action,
  Store,
} from '@ngrx/store';
import { AppState } from 'src/app/ngrx/index';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import * as DataControlActions from 'src/app/features/data-controls/ngrx/data-controls.actions';
import * as PeopleDataActions from './people-data.actions';
import { SwapiService } from 'src/app/services/swapi/swapi.service';
import {
  debounceTime,
  switchMap,
} from 'rxjs/operators';


@Injectable()
export class PeopleDataEffects {
  constructor(
    public actions$: Actions,
    public store: Store<AppState>,
    public swapiService: SwapiService,
  ) {}

  @Effect()
  public loadPeople$ = this.actions$.pipe(
    ofType<DataControlActions.LoadPeopleAction>(DataControlActions.actionTypes.LoadPeople),
    switchMap(() => [
      new PeopleDataActions.ResetPeopleDataAction(),
      new PeopleDataActions.FetchPeopleDataAction(),
    ]),
  );

  @Effect()
  public fetchPeopleData$ = this.actions$.pipe(
    ofType<PeopleDataActions.FetchPeopleDataAction>(PeopleDataActions.actionTypes.FetchPeopleData),
    switchMap(action => this.swapiService.getPeople(action.url)),
    debounceTime(200), // Let's not murder these nice folks' server
    switchMap((result) => {
      const actions: Action[] = [new PeopleDataActions.AppendPeopleDataAction(result.results)];
      actions.push(result.next
        ? new PeopleDataActions.FetchPeopleDataAction(result.next)
        : new PeopleDataActions.SetPeopleDataIsLoadingAction(false)
      );
      return actions;
    }),
  );
}
