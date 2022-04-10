import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './paises.component';

const PAISES_HOME = 'paises';
const routes: Routes = [
  {
    path: '',
    redirectTo: PAISES_HOME,
  },
  {
    path: PAISES_HOME,
    component: PaisesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisesRoutingModule {}
