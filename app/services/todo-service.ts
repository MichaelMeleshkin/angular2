import { Injectable } from '@angular/core';

import { todos } from '../services/todo-data';
import { ITodo } from '../models/todo';

@Injectable()
export class TodoService {
    getTodos(): ITodo[] {
        return todos;
    }

    addTodo(todo: ITodo): void {
        todos.push(todo);
    }

    deleteTodo(todo: ITodo) {
        let index = todos.indexOf(todo);
        if ( ~index ) {
            todos.splice(index, 1);         
        }
    }
}