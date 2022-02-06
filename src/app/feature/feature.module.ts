import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './home/home.component';
import { Tarea1Component } from './tarea1/tarea1.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { Proyecto2Component } from './proyecto2/proyecto2.component';
import { Tarea2Component } from './tarea2/tarea2.component';
import { Tarea3Component } from './tarea3/tarea3.component';



@NgModule({
  declarations: [
    HomeComponent,
    Tarea1Component,
    ProyectoComponent,
    Proyecto2Component,
    Tarea2Component,
    Tarea3Component
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
