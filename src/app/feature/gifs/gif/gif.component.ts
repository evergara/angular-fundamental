import { Component, Input } from '@angular/core';
import { Git } from '../shared/interface/gits.interface';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss'],
})
export class GifComponent {
  @Input('gif_transfer') gif!: Git;
  constructor() {}
}
