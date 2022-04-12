import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '@feature/paises/shared/services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country, Translation } from '../../shared/interfaces/county';

interface Translation1 {
  translations: { [key: string]: Translation };
}

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.scss'],
})
export class SeeCountryComponent implements OnInit {
  country!: Country;
  //translations!: { [key: string]: Translation };

  constructor(
    private activatedRoure: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoure.params
      .pipe(
        switchMap(({ id }) => this.countriesService.getCountryByAlpha(id)),
        tap(console.log)
      )
      .subscribe((country) => {
        this.country = country[0];
        // this.translations = this.country.translations;

        //console.log(this.translations);
      });
    // this.activatedRoure.params.subscribe(({ id }) => {
    //   console.log({ id });
    //   this.countriesService.getCountryByAlpha(id).subscribe((country) => {
    //     console.log(country);
    //   });
    // });
  }
}
