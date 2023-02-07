import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoItem } from './store/model/todo-item';
import { AddTodo, ToggleTodoDoneStatus } from './store/state/todo.actions';
import { TodoState } from './store/state/todo.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './style.scss'],
  imports : [CommonModule, RouterModule, ReactiveFormsModule],
  standalone : true
})
export class AppComponent {
  public form : FormGroup;

  @Select(TodoState.getTodoList)
  todos$ : Observable<TodoItem[]>;

  constructor(
    private store : Store
  ) {
    this.form = new FormGroup({
      description : new FormControl(null, [Validators.required]),
      done : new FormControl()
    });
  }

  onSubmit() {
    if(this.form.valid) {
      this.store.dispatch(new AddTodo({
        description : this.form.get('description')?.value,
        done : this.form.get('done')?.value || false
      })).subscribe(() => {
        this.form.reset();
      });
    }
  }

  toggleDone(todo : TodoItem) {
    this.store.dispatch(new ToggleTodoDoneStatus({
      description : todo.description,
      done : !todo.done
    }));
  }
}
