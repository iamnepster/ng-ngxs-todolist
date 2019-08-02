import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTodo } from '../actions/todo.actions';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  constructor(private store: Store) { }

  addTodo(text: string) {
    this.store.dispatch(new AddTodo(text));
  }

  ngOnInit() {
  }

}
