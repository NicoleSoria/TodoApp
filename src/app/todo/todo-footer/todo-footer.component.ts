
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromFilter from '../../filter/filter.actions';
import { Todo } from '../models/todo.model';
import { EliminarAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html'
})
export class TodoFooterComponent implements OnInit {

  filtroValidos: fromFilter.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFilter.filtrosValidos;

  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe( state => {
      this.filtroActual = state.filtro;

      this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(filtro: fromFilter.filtrosValidos) {

    const accion = new fromFilter.SetFiltroAction(filtro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter( todo => !todo.completado).length;
  }

  limpiarCompletados(){

    const accion = new EliminarAllTodoAction();
    this.store.dispatch(accion);
  }
}
