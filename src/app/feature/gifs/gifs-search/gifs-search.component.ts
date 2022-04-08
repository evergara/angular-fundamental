import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../shared/services/gifs.service';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styleUrls: ['./gifs-search.component.scss'],
})
export class GifsSearchComponent {
  @ViewChild('searchGifs') fieldSearchGifs!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) {}

  search(): void {
    const query: string = this.fieldSearchGifs.nativeElement.value;
    this.gifsService.buscarGif(query);
    this.resetFieldSearch();
  }

  private resetFieldSearch(): void {
    this.fieldSearchGifs.nativeElement.value = '';
  }
}
