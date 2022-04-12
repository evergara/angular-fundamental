import { Component } from '@angular/core';
import { Country } from '@feature/paises/shared/interface/county';
import { CountriesService } from '@feature/paises/shared/services/countries.service';

@Component({
  selector: 'app-by-countries',
  templateUrl: './by-countries.component.html',
  styleUrls: ['./by-countries.component.scss'],
})
export class ByCountriesComponent {
  countryToSearch: string;
  showNotification: boolean;
  countries: Country[];

  constructor(private countriesService: CountriesService) {
    this.countryToSearch = '';
    this.showNotification = false;
    this.countries = [];
  }

  search(): void {
    this.showNotification = false;
    this.countriesService.searchCountry(this.countryToSearch).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => {
        this.showNotification = true;
      }
    );
  }
}
