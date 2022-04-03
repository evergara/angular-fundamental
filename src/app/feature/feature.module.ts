import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './home/home.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { HeroeListComponent } from './heroes/heroe-list/heroe-list.component';
import { HeroesService } from './heroes/services/heroes.service';

@NgModule({
  declarations: [
    HomeComponent,
    ContadorComponent,
    HeroeComponent,
    HeroeListComponent,
  ],
  imports: [CommonModule, CoreModule, SharedModule, FeatureRoutingModule],
  providers: [HeroesService],
})
export class FeatureModule {}
