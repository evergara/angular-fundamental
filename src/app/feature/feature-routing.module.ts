import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const HOME_ROUTE: string = '/home';
const routes: Routes = [
  {path: '', redirectTo: HOME_ROUTE, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
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
