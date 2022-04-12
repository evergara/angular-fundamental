import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.scss'],
})
export class CountryInputComponent implements OnInit {
  @Output() onSearchEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  term: string;

  debouncer: Subject<string> = new Subject();

  constructor() {
    this.term = '';
  }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  search(): void {
    this.onSearchEnter.emit(this.term);
  }

  keyPress(): void {
    this.debouncer.next(this.term);
  }
}
