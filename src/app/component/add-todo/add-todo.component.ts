import { Component, EventEmitter, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoText: string = "";
  @Output() addTodo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.todoText.length > 0){
      console.log("Child Component Send: " + this.todoText);
      this.addTodo.emit(this.todoText);
      this.todoText = "";
    }
  }
}
