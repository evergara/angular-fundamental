import { Component, OnInit } from '@angular/core';
import { Heroe } from '../model/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  private _heroe: Heroe;

  constructor() { 
    this._heroe = {
      name: 'Iroman',
      edad: 45
    };
  }

  ngOnInit(): void {
  }

  get name(): string {
    return this._heroe.name;
  }
  set name(name: string) {
    this._heroe.name = name;
  }

  get edad(): number {
    return this._heroe.edad;
  }
  set edad(edad: number) {
    this._heroe.edad = edad;
  }
  get nombreCapitalizar(): string {
    return this.name.toUpperCase();
  }

  obtenerDetalle(): string {
    return this._heroe.name + " " + this._heroe.edad;
  }

}
