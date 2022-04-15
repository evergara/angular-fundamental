import { Component, Input } from '@angular/core';
import { CardPipe } from '../../interfaces/card-pipe';

@Component({
  selector: 'app-pipe-page',
  templateUrl: './pipe-page.component.html',
  styleUrls: ['./pipe-page.component.scss'],
})
export class PipePageComponent {
  @Input() dataPipe!: CardPipe;

  dunction() {
    // this.dataPipe = [
    //   {
    //     header: 'Pipe basic',
    //     subheader: 'LearNing pipe angular',
    //     body: 'lorem ipsum dolor, SIT amet consectetur adipisicing ELIT. Obcaecat...',
    //     operation: 'Pipe APLICado ',
    //     pipe: '',
    //   },
    //   {
    //     header: 'Pipe basic',
    //     subheader: 'LearNing pipe angular',
    //     body: 'lorem ipsum dolor, SIT amet consectetur adipisicing ELIT. Obcaecat...',
    //     operation: 'Pipe APLICado',
    //     pipe: 'uppercase',
    //   },
    // ];
  }
}
