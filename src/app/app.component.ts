import { Component } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi/swapi.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx';
import { FetchPeopleDataAction } from 'src/app/ngrx/people-data/people-data.actions';
import { FetchFilmDataAction } from 'src/app/ngrx/film-data/film-data.actions';
import { FetchPlanetDataAction } from 'src/app/ngrx/planet-data/planet-data.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swpeeps';

  constructor(
    public store: Store<AppState>,
  ) {}
}
