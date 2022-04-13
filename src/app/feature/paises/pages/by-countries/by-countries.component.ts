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
  countriesSuggestion: Country[];
  notificationError?: NotificationError;
  showSuggestion: boolean;

  constructor(private countriesService: CountriesService) {
    this.title = 'Pais';
    this.countryToSearch = '';
    this.countries = [];
    this.countriesSuggestion = [];
    this.showSuggestion = false;
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
    this.countryToSearch = term;
    this.showSuggestion = true;
    this.fillNotificationError(false, '');
    this.countriesService.searchCountry(term).subscribe(
      (countries) => {
        this.countriesSuggestion = countries.splice(0, 5);
      },
      (err) => {
        this.countriesSuggestion = [];
        this.showSuggestion = false;
      }
    );
  }

  fillNotificationError(show: boolean, value: string, message?: string): void {
    message = message || 'No se emcontro nada, con esta busqueda';
    this.notificationError = {
      message,
      show,
      value,
    };
  }

  searchSuggestion(): void {
    this.showSuggestion = false;
    this.search(this.countryToSearch);
  }
}
