import { Component, Input } from '@angular/core';
import { Country } from '@feature/paises/shared/interfaces/county';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss'],
})
export class CountryTableComponent {
  @Input('transfer_table') countries: Country[];
  constructor() {
    this.countries = [];
  }
}
