import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HistoryService } from '@core/services/history.service';
import { HttpService } from '../../../../core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  //TODO: Cambiar el Any por el tipado correcto
  public resultApi: any[] = [];

  constructor(
    private historiesService: HistoryService,
    private httpService: HttpService
  ) {}

  buscarGif(query: string) {
    this.historiesService.history = query;

    this.httpService
      .get(
        'https://api.giphy.com/v1/gifs/search?api_key=jM0X1H96fDbwQ4OUp5iUHAEtoSQv8SSX&q=risa&limit=10'
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultApi = resp.data;
      });
  }
}
