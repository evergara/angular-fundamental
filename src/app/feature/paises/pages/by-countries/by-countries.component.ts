import { Component } from '@angular/core';
import { Country } from '@feature/paises/shared/interfaces/county';
import { NotificationError } from '@feature/paises/shared/interfaces/notificationerror';
import { CountriesService } from '@feature/paises/shared/services/countries.service';

@Component({
  selector: 'app-by-countries',
  templateUrl: './by-countries.component.html',
  styleUrls: ['./by-countries.component.scss'],
})
export class ByCountriesComponent {
  title: string;
  countryToSearch: string;
  countries: Country[];
  notificationError?: NotificationError;

  constructor(private countriesService: CountriesService) {
    this.title = 'Pais';
    this.countryToSearch = '';
    this.countries = [];
  }

  search(term: string): void {
    this.countryToSearch = term;
    this.fillNotificationError(false, '');
    this.countriesService.searchCountry(this.countryToSearch).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => {
        this.fillNotificationError(true, this.countryToSearch);
        this.countries = [];
      }
    );
  }

  suggestion(term: string): void {
    this.fillNotificationError(false, '');
    //TDOO: suggestion
  }

  fillNotificationError(show: boolean, value: string, message?: string): void {
    message = message || 'No se emcontro nada, con esta busqueda';
    this.notificationError = {
      message,
      show,
      value,
    };
  }
}
