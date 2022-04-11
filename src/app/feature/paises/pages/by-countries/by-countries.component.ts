import { Component } from '@angular/core';
import { CountriesService } from '@feature/paises/shared/services/countries.service';

@Component({
  selector: 'app-by-countries',
  templateUrl: './by-countries.component.html',
  styleUrls: ['./by-countries.component.scss'],
})
export class ByCountriesComponent {
  countryToSearch: string;

  constructor(private countriesService: CountriesService) {
    this.countryToSearch = '';
  }

  search(): void {
    this.countriesService
      .searchCountry(this.countryToSearch)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
