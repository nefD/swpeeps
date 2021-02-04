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
import * as PlanetDataActions from './planet-data.actions';
import {
  debounceTime,
  switchMap,
} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class PlanetDataEffects {
  constructor(
    public actions$: Actions,
    public store: Store<AppState>,
    public swapiService: SwapiService,
  ) {}

  @Effect()
  public loadPlanets$ = this.actions$.pipe(
    ofType<DataControlActions.LoadPeopleAction>(DataControlActions.actionTypes.LoadPeople),
    switchMap(() => [
      new PlanetDataActions.ResetPlanetDataAction(),
      new PlanetDataActions.FetchPlanetDataAction(),
    ]),
  );

  @Effect()
  public fetchPlanetData$ = this.actions$.pipe(
    ofType<PlanetDataActions.FetchPlanetDataAction>(PlanetDataActions.actionTypes.FetchPlanetData),
    switchMap(action => this.swapiService.getPlanets(action.url)),
    debounceTime(200), // Let's not murder these nice folks' server
    switchMap((result) => {
      const actions: Action[] = [new PlanetDataActions.AppendPlanetDataAction(result.results)];
      actions.push(result.next
        ? new PlanetDataActions.FetchPlanetDataAction(result.next)
        : new PlanetDataActions.SetPlanetDataIsLoadingAction(false)
      );
      return actions;
    }),
  );
}
