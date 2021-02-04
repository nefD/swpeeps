import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx';
import { LoadPeopleAction } from 'src/app/features/data-controls/ngrx/data-controls.actions';

@Component({
  selector: 'app-data-controls',
  templateUrl: './data-controls.component.html',
})
export class DataControlsComponent {

  constructor(
    public store: Store<AppState>,
  ) {}

  public onLoadPeopleClicked(): void {
    this.store.dispatch(new LoadPeopleAction());
  }
}
