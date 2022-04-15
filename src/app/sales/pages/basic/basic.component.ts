import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
  title: string = 'LearNing pipe angular';
  text: string =
    'lorem ipsum dolor, SIT amet consectetur adipisicing ELIT. Obcaecat...';
  operation: string = 'Pipe APLICado ';
}
