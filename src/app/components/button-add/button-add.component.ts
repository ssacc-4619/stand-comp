import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/model/todoItem';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {
  @Input()
  item !: TodoItem;
  @Input()
  todoList !: TodoItem[];
  @Output()
  itemChange : EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output()
  todoListChange : EventEmitter<TodoItem[]> = new EventEmitter<TodoItem[]>();

  passaDato(){
    this.item.id = this.todoList.length;
    this.todoList.push(this.item);

    //JSON.stringify -> Trasformare in una stringa JSON un oggetto
    console.log("TodoList", JSON.stringify(this.todoList));
    console.log("ItemDescription", JSON.stringify(this.item.description));

    //azzeramento
    this.item = new TodoItem();

    //emissione elemento di change delle variabili (NON SERVE QUANDO SI USA ngModel!)
    this.itemChange.emit(this.item);
    this.todoListChange.emit(this.todoList);
  }
}
