import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TodoItem } from '../model/todo-item';
import { TodoAction } from './todo.actions';

export class TodoStateModel {
  public items : TodoItem[];
}

const defaults : TodoStateModel = {
  items: []
};

@State<TodoStateModel>({
  name: 'todo',
  defaults
})
@Injectable()
export class TodoState {
  @Action(TodoAction)
  add({ getState, setState }: StateContext<TodoStateModel>, { payload }: TodoAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }

  @Selector()
  static getTodoList(state : TodoStateModel) {
    return state.items;
  }
}
