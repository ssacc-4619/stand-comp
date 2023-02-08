import { Component } from '@angular/core';
import { TodoItem } from './model/todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'progettino';

  todoList : TodoItem[] = [];

  item : TodoItem = new TodoItem();
}
