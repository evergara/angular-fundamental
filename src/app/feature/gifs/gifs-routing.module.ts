import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifsComponent } from './gifs.component';

const HOME_ROUTE_GIFS = 'gits';
const routes: Routes = [
  {
    path: '',
    redirectTo: HOME_ROUTE_GIFS,
  },
  {
    path: HOME_ROUTE_GIFS,
    component: GifsComponent,
  },
  { path: '**', redirectTo: HOME_ROUTE_GIFS, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifsRoutingModule {}
