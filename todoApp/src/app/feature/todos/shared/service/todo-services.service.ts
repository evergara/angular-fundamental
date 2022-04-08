import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoServicesService {
  private _todos: Todo[];

  constructor() {
    this._todos = [];
  }

  get todos(): Todo[] {
    return [...this._todos];
  }

  addTodo(todo: Todo): void {
    todo.id = this.getIndexTodo();
    this._todos.push(todo);
  }
  deleteTodo(index: number) {
    this._todos.splice(index, 1);
  }
  updateTodo(index: number, todo: Todo) {
    console.log(todo);
    this._todos[index].task = todo.task;
  }
  private getIndexTodo(): number {
    let id: number = 1;
    this._todos.forEach((todo) => {
      if (id <= todo.id) {
        id = todo.id + 1;
      }
    });
    return id;
  }
}
