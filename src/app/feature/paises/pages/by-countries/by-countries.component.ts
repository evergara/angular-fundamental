import { Component } from '@angular/core';
import { Country } from '@feature/paises/shared/interfaces/county';
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

  search(term: string): void {
    this.showNotification = false;
    this.countryToSearch = term;
    this.countriesService.searchCountry(this.countryToSearch).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => {
        this.showNotification = true;
      }
    );
  }

  suggestion(term: string): void {
    this.showNotification = false;
    //TDOO: suggestion
  }
}
