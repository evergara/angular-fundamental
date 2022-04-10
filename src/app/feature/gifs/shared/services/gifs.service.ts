import { Injectable } from '@angular/core';
import { DataAplicationService } from '@core/services/data-aplication.service';
import { HistoryService } from '@core/services/history.service';
import { Git } from '../interface/gits.interface';
import { GifsHttpService } from './gifs-http.service';
import { environment } from '../../../../../environments/environment';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gitsResponse: Git[];
  private API: string;
  private endPoint: string = 'gifs';
  private opctiom: string = 'search';
  private apiManagmentKey: string;

  constructor(
    private historiesService: HistoryService,
    private gifsHttpService: GifsHttpService,
    private dataAplicationService: DataAplicationService
  ) {
    this.apiManagmentKey = environment.apiManagmentKey;
    this.API = environment.apiManagmentURL + '/' + environment.appVersion;
    this.gitsResponse =
      JSON.parse(this.dataAplicationService.getLocalStorage('gifsResult')!) ||
      [];
  }

  buscarGif(query: string) {
    this.historiesService.history = query;

    this.gifsHttpService
      .get(
        `${this.API}/${this.endPoint}/${this.opctiom}?api_key=${
          this.apiManagmentKey
        }&q=${query}&limit=10&offset=${this.getOffSet()}`
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

  private getOffSet(): number {
    let max: number = 1000;
    let min: number = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getParamsGifts(query: string): HttpParams {
    return new HttpParams()
      .set('api_key', this.apiManagmentKey)
      .set('q', query)
      .set('limit', 10)
      .set('offset', this.getOffSet());
  }
}
