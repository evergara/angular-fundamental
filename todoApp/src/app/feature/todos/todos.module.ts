import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodoListComponent,
    TodoAddComponent,
  ],
  imports: [CommonModule, TodosRoutingModule, FormsModule],
})
export class TodosModule {}
