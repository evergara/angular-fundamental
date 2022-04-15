import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-percent',
  templateUrl: './pipe-percent.component.html',
  styleUrls: ['./pipe-percent.component.scss'],
})
export class PipePercentComponent {
  title: string = 'Pipe percent';
  description: string = `Transforma un número en una cadena de porcentaje, formateada según las reglas de la configuración regional que determinan el tamaño y el separador de grupos, el carácter de punto decimal y otras configuraciones específicas de la configuración regional.

  {{ valor_expresión | porcentaje [ : digitsInfo [ : locale ] ] }}`;

  header: string = 'Ganancias porcental';
  subheader: string = 'Del presete año';
  operation_card: string = 'Pipe APLICado ';
  netSales: number = 2567789.5567;
  Percentages: number = 0.49152;
}
