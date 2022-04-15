import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-date',
  templateUrl: './pipe-date.component.html',
  styleUrls: ['./pipe-date.component.scss'],
})
export class PipeDateComponent {
  title: string = 'Pipes DATE';
  description: string =
    'Pipes incluidos en angular - usualmente en el Common Modules, manejo  de fechas';

  header: string = 'Pipe Date';
  subheader: string = 'Pipe Date';
  operation_card: string = 'Pipe APLICado ';

  fecha: Date = new Date();
}
