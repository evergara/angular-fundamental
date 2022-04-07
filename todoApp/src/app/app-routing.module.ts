import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from '@shared/components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/todos/todos.module').then((m) => m.TodosModule),
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
