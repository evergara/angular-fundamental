import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss'],
})
export class CountryInputComponent {
  @Output() onSearchEnter: EventEmitter<string> = new EventEmitter();
  term: string;

  constructor() {
    this.term = '';
  }

  search(): void {
    this.onSearchEnter.emit(this.term);
  }
}
