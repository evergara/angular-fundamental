import { Component } from '@angular/core';
import { CountriesService } from '@feature/paises/shared/services/countries.service';

@Component({
  selector: 'app-by-countries',
  templateUrl: './by-countries.component.html',
  styleUrls: ['./by-countries.component.scss'],
})
export class ByCountriesComponent {
  countryToSearch: string;
  showNotification: boolean;

  constructor(private countriesService: CountriesService) {
    this.countryToSearch = '';
    this.showNotification = false;
  }

  search(): void {
    this.showNotification = false;
    this.countriesService.searchCountry(this.countryToSearch).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        this.showNotification = true;
      }
    );
  }
}
