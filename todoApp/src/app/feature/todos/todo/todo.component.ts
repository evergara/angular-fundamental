import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../shared/model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input('todo_transfer') todo!: Todo;
  @Output() deleteEventTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() updatedEventTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  completedTodo(): void {
    this.updatedTodo();
  }

  deleteTodo(): void {
    this.deleteEventTodo.emit(this.todo);
  }

  updatedTodo(): void {
    this.updatedEventTodo.emit(this.todo);
  }
}
