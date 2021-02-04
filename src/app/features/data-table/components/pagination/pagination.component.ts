import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() public isLoading = false;
  @Input() public totalCount = 0;
  @Input() public pageCount = 0;
  @Input() public currentPage = 1;

  @Output() public setPage = new EventEmitter<number>();
  @Output() public firstPage = new EventEmitter<void>();
  @Output() public lastPage = new EventEmitter<number>();
  @Output() public previousPage = new EventEmitter<void>();
  @Output() public nextPage = new EventEmitter<void>();

  public pageControl: FormControl;

  public ngOnInit(): void {
    this.pageControl = new FormControl(this.currentPage, [
      Validators.required,
      this.pageNumberValidator,
    ]);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalCount || changes.pageCount || changes.currentPage) {
      this.pageControl?.patchValue(this.currentPage);
    }
  }

  public pageNumberValidator: ValidatorFn = (control: FormControl) => {
    return (isNaN(control.value) || control.value < 1 || control.value > this.pageCount)
      ? { invalid: true } // We could get more granular here.. less than zero, greater than page count, etc.
      : null;
  }

  public firstPageClicked = () => this.firstPage.emit();
  public lastPageClicked = () => this.lastPage.emit(this.pageCount);
  public previousPageClicked = () => this.previousPage.emit();
  public nextPageClicked = () => this.nextPage.emit();

  public pageChanged(): void {
    if (this.pageControl.errors) {
      return;
    }
    this.setPage.emit(this.pageControl.value);
  }
}
