import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-basic',
  templateUrl: './pipe-basic.component.html',
  styleUrls: ['./pipe-basic.component.scss'],
})
export class PipeBasicComponent {
  title: string = 'Pipes Basicos';
  description: string =
    'Pipes incluidos en angular - usualmente en el Common Modules∂';

  title_card: string = 'LearNing pipe angular';
  text_card: string =
    'lorem ipsum dolor, SIT amet consectetur adipisicing ELIT. Obcaecat...';
  operation_card: string = 'Pipe APLICado ';
}
