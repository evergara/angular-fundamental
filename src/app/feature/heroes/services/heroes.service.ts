import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../model/heroe';

@Injectable()
export class HeroesService {
  private Heroes: Heroe[];

  constructor() {
    this.Heroes = [
      {
        name: 'Iroman',
        edad: 45,
      },
      {
        name: 'Spiderman',
        edad: 30,
      },
      {
        name: 'Hulk',
        edad: 40,
      },
      {
        name: 'Thor',
        edad: 200,
      },
    ];
  }

  all(): Heroe[] {
    return this.Heroes;
  }

  /*
  all(): Observable<Heroe[]>{
    return this.Heroes;
  }
  */
}
