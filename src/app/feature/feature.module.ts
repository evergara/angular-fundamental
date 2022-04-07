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
import { DbzMainComponent } from './dbz/dbz-main/dbz-main.component';
import { FormsModule } from '@angular/forms';
import { DbzDetailComponent } from './dbz/dbz-detail/dbz-detail.component';
import { DbzListComponent } from './dbz/dbz-list/dbz-list.component';
import { DbzCreateComponent } from './dbz/dbz-create/dbz-create.component';
import { DbzServiceService } from './dbz/services/dbz-service.service';

@NgModule({
  declarations: [
    HomeComponent,
    ContadorComponent,
    HeroeComponent,
    HeroeListComponent,
    DbzMainComponent,
    DbzDetailComponent,
    DbzListComponent,
    DbzCreateComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FeatureRoutingModule,
    FormsModule,
  ],
  exports: [DbzMainComponent],
  providers: [HeroesService, DbzServiceService],
})
export class FeatureModule {}
