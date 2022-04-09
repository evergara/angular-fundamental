import { Injectable } from '@angular/core';
import { DataAplicationService } from './data-aplication.service';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private _searchHistories: string[];
  private SIZE_OF_HISTORY: number = 10;

  constructor(private dataAplicationService: DataAplicationService) {
    let historial =
      this.dataAplicationService.getLocalStorage('gifsHistorial') ||
      JSON.stringify([]);
    this._searchHistories = JSON.parse(historial.toString());
  }

  get histories(): string[] {
    return [...this._searchHistories];
  }

  set history(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (this.validateQuery(query)) {
      this._searchHistories.unshift(query);
      this.cutOfHistories();
      this.saveLocalStorage(
        'gifsHistorial',
        JSON.stringify(this._searchHistories)
      );
    }

    console.log(query);
  }

  private validateQuery(query: string): boolean {
    if (query.length === 0) return false;
    if (this._searchHistories.includes(query)) return false;
    return true;
  }

  private cutOfHistories(): void {
    this._searchHistories = this._searchHistories.slice(
      0,
      this.SIZE_OF_HISTORY
    );
  }

  private saveLocalStorage(token: string, data: string): void {
    this.dataAplicationService.saveLocalStorage(token, data);
  }
}
