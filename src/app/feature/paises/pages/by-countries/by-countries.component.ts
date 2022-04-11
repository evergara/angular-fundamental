import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-countries',
  templateUrl: './by-countries.component.html',
  styleUrls: ['./by-countries.component.scss'],
})
export class ByCountriesComponent {
  countryToSearch: string;
  constructor() {
    this.countryToSearch = '';
  }

  search(): void {
    console.log(this.countryToSearch);
  }
}
