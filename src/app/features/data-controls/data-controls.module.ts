import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadPeopleButtonComponent } from './components/load-people-button/load-people-button.component';
import { DataControlsComponent } from './container/data-controls.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [LoadPeopleButtonComponent, DataControlsComponent],
  exports: [
    DataControlsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
})
export class DataControlsModule { }
