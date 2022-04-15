import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-currency',
  templateUrl: './pipe-currency.component.html',
  styleUrls: ['./pipe-currency.component.scss'],
})
export class PipeCurrencyComponent {
  title: string = 'Pipe currency';
  description: string =
    'Transforma un número en una cadena de moneda, formateada de acuerdo con las reglas locales que determinan el tamaño y el separador del grupo, el carácter del punto decimal y otras configuraciones específicas de la localidad.';

  header: string = 'Ventas Brutas';
  subheader: string = 'Del presete año';
  operation_card: string = 'Pipe APLICado ';
  netSales: number = 2567789.5567;
  Percentages: number = 0.49;
}
