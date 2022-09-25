import { Component } from '@angular/core';
import { ITodoItem } from './class/TodoItem';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'TodoApp';
}
