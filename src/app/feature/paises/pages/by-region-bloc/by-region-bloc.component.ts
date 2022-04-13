import { Component } from '@angular/core';
import { Country } from '@feature/paises/shared/interfaces/county';
import { CountriesService } from '@feature/paises/shared/services/countries.service';

@Component({
  selector: 'app-by-region-bloc',
  templateUrl: './by-region-bloc.component.html',
  styleUrls: ['./by-region-bloc.component.scss'],
})
export class ByRegionBlocComponent {
  regions: string[];
  regionActiva: string;
  countries: Country[];

  constructor(private countriesService: CountriesService) {
    this.regions = [
      'EU',
      'EFTA',
      'CARICOM',
      'PA',
      'AU',
      'USAN',
      'EEU',
      'AL',
      'ASEAN',
      'CAIS',
      'CEFTA',
      'NAFTA',
      'SAARC',
    ];
    this.regionActiva = '';
    this.countries = [];
  }

  activarRegion(blocCode: string): void {
    if (this.regionActiva === blocCode) return;
    this.regionActiva = blocCode;
    console.log(blocCode);
    this.countriesService.searchRegionBloc(blocCode).subscribe((countries) => {
      this.countries = countries;
    });
  }

  getClassCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
