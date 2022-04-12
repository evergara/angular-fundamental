import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '@feature/paises/shared/services/countries.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.scss'],
})
export class SeeCountryComponent implements OnInit {
  constructor(
    private activatedRoure: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoure.params.subscribe(({ id }) => {
      console.log({ id });
      this.countriesService.getCountryByAlpha(id).subscribe((country) => {
        console.log(country);
      });
    });
  }
}
