import { Component } from '@angular/core';

import { TodoService } from '../../services/todo-service';
import { Item } from '../list/item.component';
import { ITodo } from '../todo';

@Component ({
    selector: 'todo-list',
    styleUrls: ['./src/css/todo/list.css'],
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