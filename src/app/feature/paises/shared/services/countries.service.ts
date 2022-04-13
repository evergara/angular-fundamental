import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/county';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  get httpParams(): HttpParams {
    return new HttpParams().set('fields', 'name,capital,population,flag,cca2');
  }

  searchCountry(searchCountry: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${searchCountry}`;
    return this.http.get<Country[]>(url);
  }

  searchCapital(capitalToSearch: string) {
    const url = `${this.apiUrl}/capital/${capitalToSearch}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByAlpha(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

  searchRegionBloc(blocCode: string) {
    const url = `https://restcountries.com/v2/regionalbloc/${blocCode}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
