import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../shared/services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss'],
})
export class ByRegionComponent {
  regions: string[];
  regionActiva: string;

  constructor(private countriesService: CountriesService) {
    this.regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    this.regionActiva = '';
  }

  activarRegion(region: string): void {
    this.regionActiva = region;
    alert(region);

    //TODO: llamar servicios

    this.countriesService.searchRegion(region).subscribe((countries) => {
      console.log(countries);
    });
  }

  getClassCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
