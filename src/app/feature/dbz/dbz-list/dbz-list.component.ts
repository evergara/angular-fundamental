import { Component, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.scss'],
})
export class DbzListComponent {
  @Input('tranfer_characters') characters: Character[];

  constructor() {
    this.characters = [];
  }
  
}
