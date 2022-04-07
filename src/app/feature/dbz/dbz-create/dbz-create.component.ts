import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-dbz-create',
  templateUrl: './dbz-create.component.html',
  styleUrls: ['./dbz-create.component.scss'],
})
export class DbzCreateComponent {
  @Input('new_character') character!: Character;
  @Output() emit_character: EventEmitter<Character> = new EventEmitter();

  constructor() {}

  add() {
    if (this.character.name.trim().length === 0) {
      return;
    }
    this.emit_character.emit(this.character);
  }
}
