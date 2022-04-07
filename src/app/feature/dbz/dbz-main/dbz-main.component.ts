import { Component, OnInit } from '@angular/core';
import { DbzServiceService } from '../services/dbz-service.service';
import { Character } from './../character';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './dbz-main.component.html',
  styleUrls: ['./dbz-main.component.scss'],
})
export class DbzMainComponent implements OnInit {
  characterForm: Character;

  constructor(private dbzService: DbzServiceService) {
    this.characterForm = {
      name: '',
      power: 0,
    };
  }

  ngOnInit(): void {}

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  add(character: Character): void {
    this.dbzService.addCharacter(character);
    this.resetCharacter();
  }

  resetCharacter(): void {
    this.characterForm = {
      name: '',
      power: 0,
    };
  }
}
