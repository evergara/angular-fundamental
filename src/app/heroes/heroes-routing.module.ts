import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeAddComponent } from './pages/heroe-add/heroe-add.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroesSearchComponent } from './pages/heroes-search/heroes-search.component';

const DEFAULT_ROUTE = 'list';
const routes: Routes = [
  {
    path: '',
    redirectTo: DEFAULT_ROUTE,
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: DEFAULT_ROUTE,
        component: HeroesComponent,
      },
      {
        path: 'add',
        component: HeroeAddComponent,
      },
      {
        path: 'edit/:id',
        component: HeroeAddComponent,
      },
      {
        path: 'search',
        component: HeroesSearchComponent,
      },
      {
        path: ':id',
        component: HeroeComponent,
      },
      {
        path: '**',
        redirectTo: DEFAULT_ROUTE,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
