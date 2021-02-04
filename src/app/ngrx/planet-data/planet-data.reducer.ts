import { SwapiPlanet } from 'src/app/services/swapi/swapi.interfaces';
import * as PlanetDataActions from './planet-data.actions';

export interface State {
  isLoading: boolean;
  planets: SwapiPlanet[];
}

export const initialState: State = {
  isLoading: false,
  planets: [],
};

export function reducer(
  state: State = initialState,
  action: PlanetDataActions.Actions,
): State {
  switch (action.type) {
    case (PlanetDataActions.actionTypes.ResetPlanetData): {
      return {
        ...state,
        isLoading: true,
        planets: [],
      };
    }
    case (PlanetDataActions.actionTypes.AppendPlanetData): {
      return {
        ...state,
        planets: state.planets.concat(action.planets),
      };
    }
    case (PlanetDataActions.actionTypes.SetPlanetDataIsLoading): {
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
