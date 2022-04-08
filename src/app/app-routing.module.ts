import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './shared/components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/gifs/gifs.module').then((mod) => mod.GifsModule),
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
