import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroeAddComponent } from './pages/heroe-add/heroe-add.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesSearchComponent } from './pages/heroes-search/heroes-search.component';


@NgModule({
  declarations: [
    HeroeAddComponent,
    HeroesComponent,
    HeroeComponent,
    HeroesSearchComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
