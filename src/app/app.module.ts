import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HeaderModule } from 'src/app/features/header/header.module';
import { DataControlsModule } from 'src/app/features/data-controls/data-controls.module';
import { DataTableModule } from 'src/app/features/data-table/data-table.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from 'src/app/ngrx';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PeopleDataEffects } from 'src/app/ngrx/people-data/people-data.effects';
import { FilmDataEffects } from 'src/app/ngrx/film-data/film-data.effects';
import { PlanetDataEffects } from 'src/app/ngrx/planet-data/planet-data.effects';
import { TableEffects } from 'src/app/features/data-table/ngrx/table/table.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {}),
    HeaderModule,
    DataControlsModule,
    DataTableModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    EffectsModule.forRoot([
      PeopleDataEffects,
      FilmDataEffects,
      PlanetDataEffects,
      TableEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
