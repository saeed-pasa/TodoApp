import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoItem } from 'src/app/class/TodoItem';
import { TodoService } from 'src/app/services/todo.service';

@Component({
   selector: 'app-todos',
   templateUrl: './todos.component.html',
   styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

   todos: ITodoItem[] = [];
   doneStatus: boolean = false;

   constructor(private todoService: TodoService) { }

   ngOnInit(): void {
      this.todos = this.todoService.getTodoList();
   }

   filterTodoList() {
      return this.todos.filter(item => item.done === this.doneStatus)
   }

   doneTodos() {
      return this.todos.filter(item => item.done === true)
   }

   unDoneTodos() {
      return this.todos.filter(item => item.done === false)
   }
}
