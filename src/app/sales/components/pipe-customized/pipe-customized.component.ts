import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-customized',
  templateUrl: './pipe-customized.component.html',
  styleUrls: ['./pipe-customized.component.scss'],
})
export class PipeCustomizedComponent {
  isToggleable: boolean = true;
}
