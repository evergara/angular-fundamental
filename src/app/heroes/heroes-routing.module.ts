import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeAddComponent } from './pages/heroe-add/heroe-add.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesListComponent } from './pages/heroes/heroes-list.component';
import { HeroesSearchComponent } from './pages/heroes-search/heroes-search.component';
import { HeroesComponent } from './heroes.component';

const DEFAULT_ROUTE = 'list';
const routes: Routes = [
  {
    path: '',
    redirectTo: DEFAULT_ROUTE,
    pathMatch: 'full',
  },
  {
    path: '',
    component: HeroesComponent,
    children: [
      {
        path: DEFAULT_ROUTE,
        component: HeroesListComponent,
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
