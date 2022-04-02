import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  private _titulo: string = 'Contador App';
  private _contador: number;
  private _base: number;
  constructor() { 
    this._contador = 0;
    this._base = 10;
  }

  ngOnInit(): void {
  }

  get titulo():string {
    return this._titulo;
  }

  get contador(): number {
    return this._contador;
  }

  set contador(contador: number) {
    this._contador = contador;
  }

  get base(): number{
    return this._base;
  }

  acumular(valor: number): void {
    this._contador += valor;
  }
}
