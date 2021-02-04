export interface SwapiFilm {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

export interface SwapiPlanet {
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface SwapiPerson {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string; // i don't have a guarantee that this will always be a number
  homeworld: string;
  mass: string; // see above
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface SwapiPeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SwapiPerson[];
}


export interface SwapiFilmsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SwapiFilm[];
}

export interface SwapiPlanetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SwapiPlanet[];
}
