import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/model/todo';
import { TodoServicesService } from '../shared/service/todo-services.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  task: string;

  constructor(private todoServices: TodoServicesService) {
    this.task = '';
  }

  ngOnInit(): void {}

  createdTodo(): void {
    this.todoServices.addTodo(this.createTodo());
    this.resetFieldTodo();
  }
  resetFieldTodo() {
    this.task = '';
  }
  createTodo(): Todo {
    let todo: Todo = {
      id: 0,
      task: this.task,
      completed: false,
    };
    return todo;
  }
}
