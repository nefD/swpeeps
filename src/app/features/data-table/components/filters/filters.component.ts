import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { FilterField } from 'src/app/features/data-table/interfaces/filter-field.interface';
import {
  Subject,
  Subscription,
} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnDestroy, OnInit {

  @Input() public fields: FilterField[] = [];

  @Output() public fieldChanged = new EventEmitter<string>();
  @Output() public queryChanged = new EventEmitter<string>();

  public set field(filterField: string) {
    this.filterField = filterField;
    this.fieldChanged.emit(this.filterField);
  }
  public get field(): string {
    return this.filterField;
  }
  public set query(filterQuery: string) {
    this.filterQuery = filterQuery;
    this.changes.next(this.filterQuery);
  }
  public get query(): string {
    return this.filterQuery;
  }

  private changes = new Subject<string>();
  private changesSubscription: Subscription;
  private debounceTime = 200;
  private filterField = '';
  private filterQuery = '';

  public ngOnInit(): void {
    this.changesSubscription = this.changes
      .pipe(debounceTime(this.debounceTime))
      .subscribe(e => this.queryChanged.emit(e));
  }

  public ngOnDestroy(): void {
    this.changesSubscription.unsubscribe();
  }

  public clearQuery = () => this.query = '';
}
