import { Component, OnInit } from '@angular/core';
import { GifsService } from './../shared/services/gifs.service';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.scss'],
})
export class GifsListComponent {
  constructor(private giftsService: GifsService) {}

  get gifs() {
    return this.giftsService.resultApi;
  }
}
