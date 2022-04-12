import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/county';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountry(searchCountry: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${searchCountry}`;
    return this.http.get<Country[]>(url);
  }
}