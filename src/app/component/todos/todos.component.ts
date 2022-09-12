import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoItem } from 'src/app/class/TodoItem';

@Component({
   selector: 'app-todos',
   templateUrl: './todos.component.html',
   styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

   @Input() todos: ITodoItem[] = [
      {
         key: 754557,
         done: false,
         text: "test Test"
      },
      {
         key: 75455715165,
         done: false,
         text: "test Test 2"
      },
      {
         key: 564846,
         done: false,
         text: "test Test 3"
      },
   ];
   @Output() deleteItemParent = new EventEmitter<number>();
   @Output() toggleItemParent = new EventEmitter<number>();

   constructor() { }

   ngOnInit(): void {
   }


   deleteTodoParent(event: number) {
      console.log("Recived Key In Parent Componeant: " + event);
      this.deleteItemParent.emit(event);
   }

   toggleTodoParent(event: number) {
      console.log("Recived Toggle Key In Parent Componeant: " + event);
      this.toggleItemParent.emit(event);
   }
}
