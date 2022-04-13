import { Component, OnInit } from '@angular/core';
import { Country } from '@feature/paises/shared/interfaces/county';
import { CountriesService } from '../../shared/services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss'],
})
export class ByRegionComponent {
  regions: string[];
  regionActiva: string;
  countries: Country[];

  constructor(private countriesService: CountriesService) {
    this.regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    this.regionActiva = '';
    this.countries = [];
  }

  activarRegion(region: string): void {
    if (this.regionActiva === region) return;
    this.regionActiva = region;
    this.countriesService.searchRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }

  getClassCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
