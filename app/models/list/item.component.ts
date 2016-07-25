import { Component, Input } from '@angular/core';

import { ITodo } from '../todo';

@Component ({
    selector: 'todo-item',
    templateUrl: './app/views/todo-item.html'
})

export class Item {
    @Input() todo: ITodo;
}