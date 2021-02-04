import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import {
  Action,
  Store,
} from '@ngrx/store';
import { AppState } from 'src/app/ngrx/index';
import { SwapiService } from 'src/app/services/swapi/swapi.service';
import * as DataControlActions from 'src/app/features/data-controls/ngrx/data-controls.actions';
import * as FilmDataActions from './film-data.actions';
import {
  debounceTime,
  switchMap,
} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class FilmDataEffects {
  constructor(
    public actions$: Actions,
    public store: Store<AppState>,
    public swapiService: SwapiService,
  ) {}

  @Effect()
  public loadFilms$ = this.actions$.pipe(
    ofType<DataControlActions.LoadPeopleAction>(DataControlActions.actionTypes.LoadPeople),
    switchMap(() => [
      new FilmDataActions.ResetFilmDataAction(),
      new FilmDataActions.FetchFilmDataAction(),
    ]),
  );

  @Effect()
  public fetchPeopleData$ = this.actions$.pipe(
    ofType<FilmDataActions.FetchFilmDataAction>(FilmDataActions.actionTypes.FetchFilmData),
    switchMap(action => this.swapiService.getFilms(action.url)),
    debounceTime(200), // Let's not murder these nice folks' server
    switchMap((result) => {
      const actions: Action[] = [new FilmDataActions.AppendFilmDataAction(result.results)];
      actions.push(result.next
        ? new FilmDataActions.FetchFilmDataAction(result.next)
        : new FilmDataActions.SetFilmsLoadingAction(false)
      );
      return actions;
    }),
  );
}
