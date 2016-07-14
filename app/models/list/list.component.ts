import { Component } from '@angular/core';

import { TodoService } from '../../services/todo-service';
import { Item } from '../list/item.component';
import { ITodo, Todo } from '../todo';

@Component ({
    selector: 'todo-list',
    templateUrl: './app/views/todo-list.html',
    directives: [Item]
})

export class List {
    todos: ITodo[];
    todoServise: TodoService;

    constructor(todoServise: TodoService) {
        this.todoServise = todoServise;
    }

    ngOnInit() {
        this.todos = this.todoServise.getTodos();
    }

    todoDelete(todo) {
        this.todoServise.deleteTodo(todo);
    }
}