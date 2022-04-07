import { Injectable } from '@angular/core';
import { Character } from '../character';

@Injectable()
export class DbzServiceService {
  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 10000,
    },
  ];

  constructor() {
    console.log('Mi servicio DbzServiceService. se ha inicializado');
  }

  get characters(): Character[] {
    return [...this._characters];
  }

  addCharacter(character: Character): void {
    this._characters.push(character);
  }
}
