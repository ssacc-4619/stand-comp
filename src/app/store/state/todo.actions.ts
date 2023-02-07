import { TodoItem } from "../model/todo-item";

export class TodoAction {
  static readonly type = '[Todo] Add item';
  constructor(public payload: TodoItem) { }
}
