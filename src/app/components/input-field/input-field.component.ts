import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/model/todoItem';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input()
  item !: TodoItem;
  @Output()
  itemChange : EventEmitter<TodoItem> = new EventEmitter<TodoItem>();



  log(){
    console.log(this.item.description);
  }
}
