import * as PeopleDataActions from './people-data.actions';
import { SwapiPerson } from 'src/app/services/swapi/swapi.interfaces';

export interface State {
  isLoading: boolean;
  people: SwapiPerson[];
  recordCount: number; // We don't need to keep this here, but with large record sets it'll help performance wise
}

export const initialState: State = {
  isLoading: false,
  people: [],
  recordCount: 0,
};

export function reducer(
  state: State = initialState,
  action: PeopleDataActions.Actions,
): State {
  switch (action.type) {
    case (PeopleDataActions.actionTypes.ResetPeopleData): {
      return {
        ...state,
        isLoading: true,
        people: [],
      };
    }
    case (PeopleDataActions.actionTypes.SetPeopleDataIsLoading): {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case (PeopleDataActions.actionTypes.AppendPeopleData): {
      const people = state.people.concat(action.people);
      return {
        ...state,
        people,
        recordCount: people.length,
      };
    }
    default: {
      return state;
    }
  }
}
