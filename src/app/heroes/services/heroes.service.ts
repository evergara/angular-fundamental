import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  
  constructor(private http: HttpClient) {}

  heroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

  heroeById(heroeId: string): Observable<Heroe> {
    return this.http.get<Heroe>('http://localhost:3000/heroes/'+heroeId)    
  }
}
