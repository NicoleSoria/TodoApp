import { Todo } from './models/todo.model';
import * as fromTodo from './todo.actions';


const todo1 = new Todo('Patinar');
const todo2 = new Todo('Estudiar');
const todo3 = new Todo('Trabajar');

todo3.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones) : Todo[]{


    switch( action.type ){

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [ ...state, todo ];
    
        case fromTodo.TOGGLE_TODO:

            return state.map( todoEdit => {

                if(todoEdit.id == action.id){
                    return {
                        ...todoEdit, //Copia todas las propiedades tal cual estan menos las que especifico
                        completado: !todoEdit.completado
                    };
                } 
                else {
                    return todoEdit
                }
            });

        case fromTodo.EDITAR_TODO:

            return state.map( todoEdit => {

                if(todoEdit.id == action.id) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    };
                }
                else {
                    return todoEdit;
                }
            })

        case fromTodo.ELIMINAR_TODO:

            return state.filter( todoEliminar => todoEliminar.id != action.id );

        case fromTodo.TOGGLE_ALL_TODO:

            return state.map( todo => {
                return {
                    ...todo,
                    completado: action.completado
                };
            });

        case fromTodo.ELIMINAR_ALL_TODO:

            return state.filter( todo => !todo.completado );

        default:
            return state;
    }

}