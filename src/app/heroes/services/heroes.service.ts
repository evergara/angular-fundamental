import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe, Publisher } from '../interfaces/heroe';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.apiHeroes;

  constructor(private http: HttpClient) {}

  heroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  heroeById(heroeId: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${heroeId}`);
  }

  heroesSearch(query: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${query}&_limit=7`);
  }

  publisher(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(`${this.baseUrl}/publisher`);
  }

}
