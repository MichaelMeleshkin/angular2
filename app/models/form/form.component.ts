import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TodoService } from '../../services/todo-service';
import { ITodo, Todo } from '../todo';

@Component ({
    selector: 'todo-form',
    templateUrl: './app/views/todo-form.html'
})

export class Form {
    id: string;
    actionName: string;
    todo: ITodo;
    sub: any;

    constructor(private route: ActivatedRoute, private router: Router,
        private todoService: TodoService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            if (this.id) {
                this.actionName = 'Edit';
                this.todo = this.todoService.getTodo(this.id);
            } else {
                this.actionName = 'Create';
                this.initModel();
            }
        });
    }

    addTask(): void {
        if (this.todo.title) {
            if (this.id) {
                //edit task
                this.todoService.editTodo(this.todo);
            } else {
                //create task
                this.todoService.addTodo(this.todo);
            }

            this.initModel();
        }
    }

    private initModel() {
        this.todo = new Todo(this.getNewId(), 'New Task', '', '');
    }

    private getNewId(): string {
        let newId: number = 0;
        if (this.todoService.getTodos()) {
            newId = this.todoService.getTodos().length;
        }
        return newId.toString();
    }
}
