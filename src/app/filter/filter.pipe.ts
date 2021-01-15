import { Todo } from './../todo/models/todo.model';
import { Pipe, PipeTransform } from '@angular/core';
import * as fromFilter from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFilter.filtrosValidos): Todo[] {

    switch( filtro ){
      case 'completados':
        return todos.filter( todo => todo.completado );
      
      case 'pendientes':
        return todos.filter( todo => !todo.completado );
      
      default:
        return todos;
    }
  }

}
