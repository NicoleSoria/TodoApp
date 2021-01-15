import { filtrosValidos } from './filter/filter.actions';
import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todo/models/todo.model";
import * as fromTodo from "./todo/todo.reducer";
import * as fromFilterAction from './filter/filter.actions'
import * as fromFilter from './filter/filter.reducer'

export interface AppState {
    todos: Todo[];
    filtro: fromFilterAction.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFilter.filtroReducer
};