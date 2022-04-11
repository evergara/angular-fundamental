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

@NgModule({
  declarations: [
    PaisesComponent,
    ByCapitalComponent,
    ByCountriesComponent,
    ByRegionComponent,
    SeeCountryComponent,
  ],
  imports: [CommonModule, PaisesRoutingModule, SharedModule, FormsModule],
})
export class PaisesModule {}
