import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModule } from './feature/feature.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/feature.module').then(mod => mod.FeatureModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
