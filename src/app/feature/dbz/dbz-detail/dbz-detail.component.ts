import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-dbz-detail',
  templateUrl: './dbz-detail.component.html',
  styleUrls: ['./dbz-detail.component.scss'],
})
export class DbzDetailComponent {
  @Input('tranfer_character') character: Character;

  constructor() {
    this.character = { name: '', power: 0 };
  }
}
