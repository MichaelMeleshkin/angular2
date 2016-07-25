import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TodoService } from '../../services/todo-service';
import { ITodo, Todo } from '../todo';
import { Share, IShare } from '../share';

@Component ({
    selector: 'todo-share',
    templateUrl: './app/views/todo-share.html'
})

export class ShareList  {
    todo: ITodo;
    sub: any;

    constructor(protected route: ActivatedRoute, protected router: Router,
        protected todoService: TodoService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.todo = this.todoService.getTodo(id);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    share(name: string) {
        this.todo.share.push({name: name});

        this.todoService.editTodo(this.todo);
    }

    unshare(name: string) {
        let user = this.todo.share.filter(obj => obj.name === name)[0];
        let index = this.todo.share.indexOf(user);

        this.todo.share.splice(index, 1);

        this.todoService.editTodo(this.todo);
    }
}