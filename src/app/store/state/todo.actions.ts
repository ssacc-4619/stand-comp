import { TodoItem } from "../model/todo-item";

export class AddTodo {
  static readonly type = '[Todo] Add item';
  constructor(public payload: TodoItem) { }
}

export class ToggleTodoDoneStatus {
  static readonly type = '[Todo] Toggle done';
  constructor(public payload: TodoItem) { }
}
