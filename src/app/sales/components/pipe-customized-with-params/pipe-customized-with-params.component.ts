import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-customized-with-params',
  templateUrl: './pipe-customized-with-params.component.html',
  styleUrls: ['./pipe-customized-with-params.component.scss'],
})
export class PipeCustomizedWithParamsComponent {
  isToggleable: boolean = true;
}
