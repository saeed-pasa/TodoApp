import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
