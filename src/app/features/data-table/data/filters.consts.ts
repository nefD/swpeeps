import { FilterField } from 'src/app/features/data-table/interfaces/filter-field.interface';
import {
  DataTableColumnKeys,
  DataTableColumnProperties,
} from 'src/app/features/data-table/data/columns.consts';

export const FilterFields: FilterField[] = [
  {
    label: 'Name',
    value: DataTableColumnProperties[DataTableColumnKeys.Name],
  },
  {
    label: 'Home World',
    value: DataTableColumnProperties[DataTableColumnKeys.HomeWorld],
  },
  {
    label: 'Birth Year',
    value: DataTableColumnProperties[DataTableColumnKeys.BirthYear],
  },
  {
    label: 'Films',
    value: DataTableColumnProperties[DataTableColumnKeys.Films],
  },
];
