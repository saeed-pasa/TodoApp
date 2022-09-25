import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoItem } from 'src/app/class/TodoItem';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todoItem: ITodoItem = {};
  editStatus: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteTodo(key: number) {
    this.todoService.deleteTodo(key);
  }

  toggleTodo(key: number) {
    this.todoService.toggleTodo(key);
  }

  editsTodo(key: number, editedText: string) {
    this.editStatus = false;
    this.todoService.editTodo(key, editedText);
  }
}
