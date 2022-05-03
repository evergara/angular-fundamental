import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss'],
})
export class HeroeCardComponent {
  //@Input('heroe') heroe: Heroe | undefined;
  @Input('heroe') heroe!: Heroe;

  constructor() {}
}
