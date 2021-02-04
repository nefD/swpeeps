import { SwapiFilm } from 'src/app/services/swapi/swapi.interfaces';
import * as FilmDataActions from './film-data.actions';

export interface State {
  isLoading: boolean;
  films: SwapiFilm[];
}

export const initialState: State = {
  isLoading: false,
  films: [],
};

export function reducer(
  state: State = initialState,
  action: FilmDataActions.Actions,
): State {
  switch (action.type) {
    case (FilmDataActions.actionTypes.ResetFilmData): {
      return {
        ...state,
        isLoading: true,
        films: [],
      };
    }
    case (FilmDataActions.actionTypes.AppendFilmData): {
      return {
        ...state,
        films: state.films.concat(action.films),
      };
    }
    case (FilmDataActions.actionTypes.SetFilmsLoading): {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default: {
      return state;
    }
  }
}
