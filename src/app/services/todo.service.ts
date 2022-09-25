import { Injectable } from '@angular/core';
import { ITodoItem } from '../class/TodoItem';

@Injectable({
	providedIn: 'root'
})
export class TodoService {

	constructor() { }

	todos: ITodoItem[] = [
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

	addTodo(todo: string) {
		console.log(`Add Todo In Service: ${todo}`);
		let obj: ITodoItem = {
			key: Date.now(),
			done: false,
			text: todo
		}
		this.todos.push(obj);
		console.log(this.todos);
	}

	getTodoList() {
		return this.todos
	}

	deleteTodo(key: number) {
		console.log(`Delete Todo In Service: ${key}`);
		//this.todos = this.todos.filter(item => item.key != key);
		let todoIndex = this.todos.findIndex(todo => todo.key == key);
		this.todos.splice(todoIndex, 1);
		console.log(this.todos);
	}

	toggleTodo(key: number) {
		console.log(`Toggle Todo In Service: ${key}`);
		let todoIndex = this.todos.findIndex(todo => todo.key == key);
		this.todos[todoIndex].done = !this.todos[todoIndex].done

		// this.todos = this.todos.map(item => {
		// 	if (item.key == key) {
		// 		return {
		// 			...item,
		// 			done: !item.done
		// 		}
		// 	}
		// 	return item;
		// });
		console.log(this.todos);
	}

	editTodo(key: number, text: string) {
		console.log(`Toggle Todo In Service: ${key}`);
		let todoIndex = this.todos.findIndex(todo => todo.key == key);
		this.todos[todoIndex].text = text
		console.log(this.todos);
	}
}
