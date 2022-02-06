import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Tarea1Component } from './tarea1/tarea1.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { Proyecto2Component } from './proyecto2/proyecto2.component';
import { Tarea2Component } from './tarea2/tarea2.component';
import { Tarea3Component } from './tarea3/tarea3.component';

const HOME_ROUTE: string = '/home';
const routes: Routes = [
  {path: '', redirectTo: HOME_ROUTE, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tarea1', component: Tarea1Component},
  {path: 'tarea2', component: Tarea2Component},
  {path: 'tarea3', component: Tarea3Component},
  {path: 'proyecto', component: ProyectoComponent},
  {path: 'proyecto2', component: Proyecto2Component},
  {path: '**', redirectTo: HOME_ROUTE, pathMatch: 'full'},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
