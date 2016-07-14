import { Component, Input } from '@angular/core';

import { TodoService } from '../../services/todo-service';
import { ITodo, Todo } from '../todo';

@Component ({
    selector: 'todo-item',
    templateUrl: './app/views/todo-item.html'
})

export class Item {
    @Input() todo: ITodo;
}