import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private _searchHistories: string[];
  private SIZE_OF_HISTORY: number = 10;

  constructor() {
    this._searchHistories = [];
  }

  get histories(): string[] {
    return [...this._searchHistories];
  }

  set history(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (this.validateQuery(query)) {
      this._searchHistories.unshift(query);
      this.cutOfHistories();
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
}
