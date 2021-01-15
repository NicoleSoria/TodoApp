import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import * as fromFilter from '../../filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html'
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: fromFilter.filtrosValidos;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {

      this.todos = state.todos;
      this.filtro = state.filtro;

    });
  }

}
