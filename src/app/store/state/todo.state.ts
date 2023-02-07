import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TodoItem } from '../model/todo-item';
import { patch, updateItem } from '@ngxs/store/operators';
import { AddTodo, ToggleTodoDoneStatus } from './todo.actions';

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
  @Action(AddTodo)
  add({ getState, setState }: StateContext<TodoStateModel>, { payload }: AddTodo) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }

  @Action(ToggleTodoDoneStatus)
  toggle({ setState }: StateContext<TodoStateModel>, { payload } : ToggleTodoDoneStatus) {
    setState(
      patch<TodoStateModel>({
        items : updateItem<TodoItem>(item=> item?.description === item?.description, patch({ done : payload.done }))
      })
    );
  }

  @Selector()
  static getTodoList(state : TodoStateModel) {
    return state.items;
  }
}
