import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
	selector: 'app-add-todo',
	templateUrl: './add-todo.component.html',
	styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

	todoText: string = "";

	constructor(private todoService: TodoService) { }

	ngOnInit(): void {
	}

	onSubmit() {
		if (this.todoText.length > 0) {
			this.todoService.addTodo(this.todoText);
			this.todoText = "";
		}
	}

	// Second Way
	// onSubmit(tt: HTMLInputElement) {

	// 	if (tt.value.length > 0) {
	// 		console.log("Todo Added With Service: " + tt.value);
	// 		this.todoService.addTodo(tt.value);
	// 		tt.value = "";
	// 	}
	// }
}
