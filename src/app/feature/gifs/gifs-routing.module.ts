import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifsComponent } from './gifs.component';

const HOME_ROUTE = 'gits';
const routes: Routes = [
  {
    path: '',
    redirectTo: HOME_ROUTE,
  },
  {
    path: HOME_ROUTE,
    component: GifsComponent,
  },
  { path: '**', redirectTo: HOME_ROUTE, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifsRoutingModule {}
