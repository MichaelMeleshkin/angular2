import { Component } from '@angular/core';

import { TodoService } from '../../services/todo-service';
import { ITodo, Todo } from '../todo';

@Component ({
    selector: 'todo-form',
    templateUrl: './app/views/todo-form.html'
})

export class Form {
    todoServise: TodoService;

    constructor(todoServise: TodoService) {
        this.todoServise = todoServise;
    }

    addTask(title: string, date: string, description: string) {
        let id: string = this.todoServise.getTodos().length.toString();
        let todo: ITodo = new Todo(id, title, date, description);
        this.todoServise.addTodo(todo);
    }
}
