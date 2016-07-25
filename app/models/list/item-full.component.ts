import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TodoService } from '../../services/todo-service';
import { ITodo } from '../todo';

@Component ({
    selector: 'todo-item-full',
    templateUrl: './app/views/todo-item-full.html'
})

export class Full {
    todo: ITodo;
    sub: any;

    constructor(private route: ActivatedRoute, private router: Router,
        private todoService: TodoService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.todo = this.todoService.getTodo(id);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    complete() {
        this.todo.completed = true;

        this.todoService.editTodo(this.todo);
    }

    delete() {
        this.todoService.deleteTodo(this.todo);
        this.router.navigate(['/show']);
    }
}