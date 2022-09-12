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

   getNewTodo(todo: string) {
      console.log("Received Todo In Parent: " + todo);
      let obj: ITodoItem = {
         key: Date.now(),
         done: false,
         text: todo
      }
      this.todoList.push(obj);
      console.log(this.todoList);
   }

   deleteRoot(key: number) {
      console.log(`Root Of Project Recived: ${key}`);
      this.todoList = this.todoList.filter(item => item.key != key);
   }

   toggleRoot(key: number) {
      console.log(`Root Of Project Recived Toggle: ${key}`);
      this.todoList = this.todoList.map(item => {
         if (item.key == key) {
            return {
               ...item,
               done: !item.done
            }
         }
         return item;
      });
   }
}
