import { Component } from '@angular/core';
import { ITodoItem } from './class/TodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoApp';
  todoList: ITodoItem[] = [];

  getNewTodo(todo: string){
    console.log("Received Todo In Parent: " + todo);
    let obj: ITodoItem = { 
      key: Date.now(),
      done: false,
      text: todo
    }
    this.todoList.push(obj);
    console.log(this.todoList);
  }
}
