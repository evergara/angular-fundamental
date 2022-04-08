import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HistoryService } from '@core/services/history.service';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private historiesService: HistoryService) {}

  buscarGif(query: string) {
    this.historiesService.history = query;
  }
}
