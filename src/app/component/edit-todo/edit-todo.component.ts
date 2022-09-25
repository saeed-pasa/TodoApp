import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-edit-todo',
	templateUrl: './edit-todo.component.html',
	styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {


	@Input() textTodo: string = "";
	@Output() editedText = new EventEmitter<string>();

	constructor() { }

	ngOnInit(): void {
	}

	TextChange() {
		if (this.textTodo.length > 0) {
			this.editedText.emit(this.textTodo)
		}
	}

}
