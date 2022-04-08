import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/model/todo';
import { TodoServicesService } from '../shared/service/todo-services.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoServicesService) {}

  ngOnInit(): void {}

  get todos(): Todo[] {
    return this.todoService.todos;
  }

  deleteTodo(todo: Todo, index: number): void {
    this.todoService.deleteTodo(index);
  }

  updatedTodo(todo: Todo, index: number): void {
    this.todoService.updateTodo(index, todo);
  }
}
