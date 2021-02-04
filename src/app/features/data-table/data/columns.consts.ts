import { DataTableColumn } from 'src/app/features/data-table/interfaces/data-table-column.interface';

export enum DataTableColumnKeys {
  Name = 'name',
  HomeWorld = 'homeWorld',
  BirthYear = 'birthYear',
  Films = 'films',
}

// Decouple the property names from the column configs for easier consumption by related functionality
export const DataTableColumnProperties: Record<DataTableColumnKeys, string> = {
  [DataTableColumnKeys.Name]: 'name',
  [DataTableColumnKeys.HomeWorld]: 'homeworld',
  [DataTableColumnKeys.BirthYear]: 'birth_year',
  [DataTableColumnKeys.Films]: 'films',
};

export const DataTableDisplayedColumns = [
  DataTableColumnKeys.Name,
  DataTableColumnKeys.HomeWorld,
  DataTableColumnKeys.BirthYear,
  DataTableColumnKeys.Films,
];

export const DataTableColumns: DataTableColumn[] = [
  {
    name: DataTableColumnKeys.Name,
    label: 'Name',
    property: DataTableColumnProperties[DataTableColumnKeys.Name],
    width: '30%',
  },
  {
    name: DataTableColumnKeys.HomeWorld,
    label: 'Home World',
    property: DataTableColumnProperties[DataTableColumnKeys.HomeWorld],
  },
  {
    name: DataTableColumnKeys.BirthYear,
    label: 'Birth Year',
    property: DataTableColumnProperties[DataTableColumnKeys.BirthYear],
  },
  {
    name: DataTableColumnKeys.Films,
    label: 'Films',
    property: DataTableColumnProperties[DataTableColumnKeys.Films],
    width: '50%',
  },
];
