import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../../services/todo-service';
import { ITodo } from '../todo';

@Component ({
    selector: 'todo-item',
    templateUrl: './app/views/todo-item.html'
})

export class Item {
    @Input() todo: ITodo;
    @Output() todoItemDelete: EventEmitter<ITodo>;

    constructor() {
        this.todoItemDelete = new EventEmitter<ITodo>()
    }

    complete() {
        this.todo.completed = true;
    }

    delete() {
        this.todoItemDelete.emit(this.todo);
    }
}