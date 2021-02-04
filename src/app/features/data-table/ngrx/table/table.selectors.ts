import { createSelector } from '@ngrx/store';
import { getTableState } from 'src/app/ngrx';
import { getPlanetData } from 'src/app/ngrx/planet-data/planet-data.selectors';
import { getFilmData } from 'src/app/ngrx/film-data/film-data.selectors';
import {
  DataTableColumnKeys,
  DataTableColumnProperties,
} from 'src/app/features/data-table/data/columns.consts';
import { getPeopleData } from 'src/app/ngrx/people-data/people-data.selectors';
import { TableRowsPerPage } from 'src/app/features/data-table/data/pagination.const';

export const getTablePage = createSelector(
  getTableState,
  (state) => state.page,
);

export const getTableFilterField = createSelector(
  getTableState,
  (state) => state.filterField,
);

export const getTableFilterQuery = createSelector(
  getTableState,
  (state) => state.filterQuery,
);

export const getTableSort = createSelector(
  getTableState,
  (state) => state.sort,
);

export const getFilteredPeopleData = createSelector(
  getPeopleData,
  getPlanetData,
  getFilmData,
  getTableFilterField,
  getTableFilterQuery,
  (people, planets, films, field, query) => {
    query = query.toLowerCase();
    switch (field) {
      case (DataTableColumnProperties[DataTableColumnKeys.Films]): {
        return people
        .filter(person =>
          films
          .filter(film => person.films.includes(film.url))
          .find(film => film.title.toLowerCase().includes(query)),
        );
      }
      case (DataTableColumnProperties[DataTableColumnKeys.HomeWorld]): {
        return people
        .filter(person =>
          planets.find(planet => planet.url === person.homeworld).name.toLowerCase().includes(query));
      }
      default: {
        return !field
          ? people
          : people.filter(person => person[field].toLowerCase().indexOf(query) > -1);
      }
    }
  },
);

export const getPeopleTableData = createSelector(
  getFilteredPeopleData,
  getPlanetData,
  getFilmData,
  getTableSort,
  getTablePage,
  (people, planets, films, sort, page) => {
    // Populate it
    people = people.map(person => ({
      ...person,
      homeworld: planets.find(p => p.url === person.homeworld)?.name,
      films: person.films.map(url => films.find(f => f.url === url)?.title),
    }));

    // Sort it
    const direction = (sort.direction === 'asc') ? 1 : -1;
    const prop = DataTableColumnProperties[sort.active];
    people.sort((a, b) => a[prop] > b[prop] ? -direction : a[prop] < b[prop] ? direction : 0);

    // Slice it, and serve!
    return people.slice((page - 1) * TableRowsPerPage, page * TableRowsPerPage);
  },
);

export const getTableDataTotalPages = createSelector(
  getFilteredPeopleData,
  (people) => Math.max(1, Math.ceil(people.length / TableRowsPerPage)),
);
