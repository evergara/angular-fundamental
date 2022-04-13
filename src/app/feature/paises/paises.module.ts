import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesComponent } from './paises.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountriesComponent } from './pages/by-countries/by-countries.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { CountryErrorComponent } from './components/country-error/country-error.component';
import { CountryTitlePageComponent } from './components/country-title-page/country-title-page.component';
import { ByRegionBlocComponent } from './pages/by-region-bloc/by-region-bloc.component';

@NgModule({
  declarations: [
    PaisesComponent,
    ByCapitalComponent,
    ByCountriesComponent,
    ByRegionComponent,
    SeeCountryComponent,
    CountryTableComponent,
    CountryInputComponent,
    CountryErrorComponent,
    CountryTitlePageComponent,
    ByRegionBlocComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PaisesRoutingModule,
  ],
})
export class PaisesModule {}
