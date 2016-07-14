import { Injectable } from '@angular/core';

import { todos } from '../services/todo-data';
import { ITodo } from '../models/todo';

@Injectable()
export class TodoService {
    todos: ITodo[];

    getTodos(): ITodo[] {

        return todos;
    }

    addTodo(todo: ITodo): void {
        todos.push(todo);
    }

    deleteTodo(id: string) {

    }
}