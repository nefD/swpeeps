import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  SwapiFilmsResponse,
  SwapiPeopleResponse,
  SwapiPerson,
  SwapiPlanetsResponse,
} from 'src/app/services/swapi/swapi.interfaces';

@Injectable({ providedIn: 'root' })
export class SwapiService {

  private baseUrl = 'https://swapi.dev/api';
  private apiUrl = (path: string) => `${this.baseUrl}/${path}`;

  private getData = <T>(url: string): Observable<T> => this.httpClient.get<T>(url);
  public getPeople = (url: string = this.apiUrl('people/')): Observable<SwapiPeopleResponse> => this.getData(url);
  public getFilms = (url: string = this.apiUrl('films/')): Observable<SwapiFilmsResponse> => this.getData(url);
  public getPlanets = (url: string = this.apiUrl('planets/')): Observable<SwapiPlanetsResponse> => this.getData(url);

  constructor(
    protected httpClient: HttpClient,
  ) {}
}
