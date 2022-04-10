import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountriesComponent } from './pages/by-countries/by-countries.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';

const PAISES_HOME = 'countries';
const routes: Routes = [
  {
    path: '',
    redirectTo: PAISES_HOME,
    pathMatch: 'full',
  },
  {
    path: PAISES_HOME,
    component: ByCountriesComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: ByRegionComponent,
  },
  {
    path: 'capital',
    component: ByCapitalComponent,
  },
  {
    path: 'country/:id',
    component: SeeCountryComponent,
  },
  {
    path: '**',
    redirectTo: PAISES_HOME,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisesRoutingModule {}
