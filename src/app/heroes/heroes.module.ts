import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroeAddComponent } from './pages/heroe-add/heroe-add.component';
import { HeroesListComponent } from './pages/heroes/heroes-list.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesSearchComponent } from './pages/heroes-search/heroes-search.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [
    HeroeAddComponent,
    HeroesListComponent,
    HeroeComponent,
    HeroesSearchComponent,
    HeroesComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule, FlexLayoutModule],
})
export class HeroesModule {}
