import {
  Component,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-load-people-button',
  templateUrl: './load-people-button.component.html',
})
export class LoadPeopleButtonComponent {

  @Output() public loadPeopleClicked = new EventEmitter<void>();

  public onClicked(): void {
    this.loadPeopleClicked.emit();
  }
}
