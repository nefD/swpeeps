import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-loading-content',
  templateUrl: './loading-content.component.html',
  styleUrls: ['./loading-content.component.scss']
})
export class LoadingContentComponent {

  @Input() public isLoading = false;
  @Input() public loadingPercent = 0;

  constructor() { }

}
