import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { DataAplicationService } from '@core/services/data-aplication.service';
import { HistoryService } from '@core/services/history.service';
import { Git, SearchGifsResponse } from '../interface/gits.interface';
import { GifsHttpService } from './gifs-http.service';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gitsResponse: Git[];

  constructor(
    private historiesService: HistoryService,
    private gifsHttpService: GifsHttpService,
    private dataAplicationService: DataAplicationService
  ) {
    this.gitsResponse =
      JSON.parse(this.dataAplicationService.getLocalStorage('gifsResult')!) ||
      [];
  }

  buscarGif(query: string) {
    this.historiesService.history = query;

    this.gifsHttpService
      .get(
        'https://api.giphy.com/v1/gifs/search?api_key=jM0X1H96fDbwQ4OUp5iUHAEtoSQv8SSX&q=' +
          query +
          '&limit=10'
      )
      .subscribe((resp) => {
        console.log(resp.data);
        this.gitsResponse = resp.data;
        this.saveLocalStorage('gifsResult', JSON.stringify(this.gitsResponse));
      });
  }

  private saveLocalStorage(token: string, data: string) {
    this.dataAplicationService.saveLocalStorage(token, data);
  }
}
