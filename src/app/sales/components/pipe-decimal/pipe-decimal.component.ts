import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-decimal',
  templateUrl: './pipe-decimal.component.html',
  styleUrls: ['./pipe-decimal.component.scss'],
})
export class PipeDecimalComponent {
  title: string = 'Pipes number';
  description: string =
    'Pipes incluidos en angular - usualmente en el Common Modules, manejo  de numeros';

  header: string = 'Ventas Netas';
  subheader: string = 'Del presete año';
  operation_card: string = 'Pipe APLICado ';
  netSales: number = 2567789.5567;
  Percentages: number = 0.49;
}
