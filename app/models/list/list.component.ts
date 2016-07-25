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
    todoService: TodoService;

    constructor(todoService: TodoService) {
        this.todoService = todoService;
    }

    ngOnInit() {
        this.todos = this.todoService.getTodos();
    }
}