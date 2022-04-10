import { Component } from '@angular/core';
import { HistoryService } from '@core/services/history.service';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  private _queries: string[];

  constructor(
    private historyService: HistoryService,
    private gifsService: GifsService
  ) {
    this._queries = [];
  }

  get queries(): string[] {
    return (this._queries = this.historyService.histories);
  }

  SearchGifs(query: string): void {
    this.gifsService.buscarGif(query);
  }
}
