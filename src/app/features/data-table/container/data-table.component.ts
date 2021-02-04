import { Component } from '@angular/core';
import {
  select,
  Store,
} from '@ngrx/store';
import { AppState } from 'src/app/ngrx';
import {
  getPeopleDataCount,

} from 'src/app/ngrx/people-data/people-data.selectors';
import { FilterFields } from 'src/app/features/data-table/data/filters.consts';
import * as TableActions from 'src/app/features/data-table/ngrx/table/table.actions';
import { DataTableColumn } from 'src/app/features/data-table/interfaces/data-table-column.interface';
import {
  DataTableColumnKeys,
  DataTableColumns,
  DataTableDisplayedColumns,
} from 'src/app/features/data-table/data/columns.consts';
import {
  getTableDataIsLoading,
  getTableDataLoadingPercent,
} from 'src/app/ngrx/selectors';
import {
  getPeopleTableData,
  getTableDataTotalPages,
  getTablePage,
} from 'src/app/features/data-table/ngrx/table/table.selectors';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
})
export class DataTableComponent {

  public currentPage$ = this.store.pipe(select(getTablePage));
  public isLoading$ = this.store.pipe(select(getTableDataIsLoading));
  public loadingPercent$ = this.store.pipe(select(getTableDataLoadingPercent));
  public peopleCount$ = this.store.pipe(select(getPeopleDataCount));
  public peopleData$ = this.store.pipe(select(getPeopleTableData));
  public totalPages$ = this.store.pipe(select(getTableDataTotalPages));

  public displayedTableColumns: DataTableColumnKeys[] = DataTableDisplayedColumns;
  public filterFields = FilterFields;
  public tableColumns: DataTableColumn[] = DataTableColumns;

  constructor(
    public store: Store<AppState>,
  ) {}

  public onFilterFieldChanged(field: string): void {
    this.store.dispatch(new TableActions.SetFilterFieldAction(field));
  }

  public onFilterQueryChanged(query: string): void {
    this.store.dispatch(new TableActions.SetFilterQueryAction(query));
  }

  public onFirstPage(): void {
    this.store.dispatch(new TableActions.FirstPageAction());
  }

  public onLastPage(): void {
    this.store.dispatch(new TableActions.LastPageAction());
  }

  public onNextPage(): void {
    this.store.dispatch(new TableActions.NextPageAction());
  }

  public onPreviousPage(): void {
    this.store.dispatch(new TableActions.PreviousPageAction());
  }

  public onSetPage(page: number): void {
    this.store.dispatch(new TableActions.SetPageAction(page));
  }

  public onSortChanged(sort: Sort): void {
    this.store.dispatch(new TableActions.SetSortAction(sort));
  }
}
