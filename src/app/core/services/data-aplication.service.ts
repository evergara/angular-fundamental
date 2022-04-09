import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataAplicationService {
  constructor() {}

  saveLocalStorage(token: string, data: string): void {
    localStorage.setItem(token, data);
  }

  getLocalStorage(token: string): string | null {
    return localStorage.getItem(token);
  }
}
