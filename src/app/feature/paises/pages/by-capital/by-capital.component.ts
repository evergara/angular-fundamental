import { Component, OnInit } from '@angular/core';
import { Country } from '@feature/paises/shared/interfaces/county';
import { NotificationError } from '@feature/paises/shared/interfaces/notificationerror';
import { CountriesService } from '@feature/paises/shared/services/countries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss'],
})
export class ByCapitalComponent {
  placeholder_search: string;
  capitalToSearch: string;
  title: string;
  countries: Country[];
  notificationError?: NotificationError;

  constructor(private countriesService: CountriesService) {
    this.placeholder_search = 'capital';
    this.title = 'Capital';
    this.capitalToSearch = '';
    this.countries = [];
  }

  search(term: string): void {
    this.capitalToSearch = term;
    this.fillNotificationError(false, '');
    this.countriesService.searchCapital(this.capitalToSearch).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => {
        this.fillNotificationError(true, this.capitalToSearch);
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
