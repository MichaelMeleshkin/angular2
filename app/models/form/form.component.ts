import { Component } from '@angular/core';

import { TodoService } from '../../services/todo-service';
import { ITodo, Todo } from '../todo';

@Component ({
    selector: 'todo-form',
    templateUrl: './app/views/todo-form.html'
})

export class Form {
    todoServise: TodoService;
    id: string;
    todo: ITodo;

    constructor(todoServise: TodoService) {
        this.todoServise = todoServise;
        this._initModel();
    }

    addTask(): void {
        console.log(this.todo.id);
        if (this.todo.title) {
            this.todoServise.addTodo(this.todo);

            this._initModel();
        }
    }

    _initModel() {
        this.todo = new Todo(this._getNewId(), 'New Task', '', '');
    }

    _getNewId(): string {
        return this.todoServise.getTodos().length.toString();
    }
}
