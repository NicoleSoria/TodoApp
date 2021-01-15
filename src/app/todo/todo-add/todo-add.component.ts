import { AppState } from './../../app.reducers';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html'
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    this.textInput = new FormControl('', Validators.required);
  }


  agregarTodo(){
    
    if(!this.textInput.valid){
      return;
    }

    const accion = new fromTodo.AgregarTodoAction(this.textInput.value);
    this.store.dispatch(accion);

    this.textInput.setValue('');
  }
}
