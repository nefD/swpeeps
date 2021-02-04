import * as TableActions from 'src/app/features/data-table/ngrx/table/table.actions';
import { Sort } from '@angular/material/sort';

export interface State {
  page: number;
  filterField: string;
  filterQuery: string;
  sort: Sort;
}

export const initialState: State = {
  page: 1,
  filterField: '',
  filterQuery: '',
  sort: {
    active: '',
    direction: '',
  },
};

export function reducer(
  state: State = initialState,
  action: TableActions.Actions,
): State {
  switch (action.type) {
    case (TableActions.actionTypes.SetSort): {
      return {
        ...state,
        sort: action.sort,
      };
    }
    case (TableActions.actionTypes.SetFilterField): {
      return {
        ...state,
        filterField: action.filterField,
      };
    }
    case (TableActions.actionTypes.SetFilterQuery): {
      return {
        ...state,
        filterQuery: action.filterQuery,
      };
    }
    case (TableActions.actionTypes.SetPage): {
      return {
        ...state,
        page: action.page,
      };
    }
    default: {
      return state;
    }
  }
}
