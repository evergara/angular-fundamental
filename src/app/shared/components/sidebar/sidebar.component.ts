import { Component, OnInit } from '@angular/core';
import { HistoryService } from '@core/services/history.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  private _queries: string[];

  constructor(private historyService: HistoryService) {
    this._queries = [];
  }

  get queries(): string[] {
    return (this._queries = this.historyService.histories);
  }
}
