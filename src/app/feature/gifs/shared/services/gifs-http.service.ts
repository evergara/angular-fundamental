import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse } from '../interface/gits.interface';

@Injectable({
  providedIn: 'any',
})
export class GifsHttpService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get<SearchGifsResponse>(url);
  }
}
