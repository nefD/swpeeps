import {
  Component,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { DataTableColumn } from 'src/app/features/data-table/interfaces/data-table-column.interface';
import {
  DataTableColumnKeys,
} from 'src/app/features/data-table/data/columns.consts';
import { SwapiPerson } from 'src/app/services/swapi/swapi.interfaces';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() public columns: DataTableColumn[] = [];
  @Input() public dataSource: SwapiPerson[] = [];
  @Input() public displayedColumns: DataTableColumnKeys[] = [];
  @Input() public isLoading = false;
  @Input() public loadingPercent = 0;

  @Output() public sortChanged = new EventEmitter<Sort>();

  constructor(
    public store: Store<AppState>
  ) { }

  public sortData(sort: Sort): void {
    this.sortChanged.emit(sort);
  }

}
