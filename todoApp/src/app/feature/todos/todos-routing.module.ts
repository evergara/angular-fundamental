import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos.component';

const HOME_ROUTE = 'todo';
const routes: Routes = [
  {
    path: '',
    redirectTo: HOME_ROUTE,
  },
  {
    path: HOME_ROUTE,
    component: TodosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
