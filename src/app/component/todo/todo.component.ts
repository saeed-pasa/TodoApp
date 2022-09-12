import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoItem } from 'src/app/class/TodoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todoItem: ITodoItem = {};
  @Output() deleteItemChild = new EventEmitter<number>();
  @Output() toggleItemChild = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(date: number) {
    console.log(date);
    this.deleteItemChild.emit(date);
  }

  toggleTodo(date: number) {
    console.log(`Toggle: ${date}`);
    this.toggleItemChild.emit(date);
  }
}
