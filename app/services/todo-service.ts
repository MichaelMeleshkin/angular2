import { Injectable } from '@angular/core';

import { ITodo } from '../models/todo';

@Injectable()
export class TodoService {
    private todos: Array<ITodo>;

    getTodos(): ITodo[] {
        this.readLocalStorage();
        return this.todos;
    }

    getTodo(id: string): ITodo {
        this.readLocalStorage();
        return this.todos.filter((obj: ITodo) => obj.id === id)[0];
    }

    addTodo(todo: ITodo): void {
        console.log('test');
        console.log(this.todos);
        this.todos.push(todo);
        this.writeLocalStorage();
    }

    editTodo(todo: ITodo): void {
        this.readLocalStorage();
        let index = this.todos.indexOf(this.todos.filter((obj: ITodo) => obj.id === todo.id)[0]);
        console.log(todo.id);
        console.log(this.getTodo(todo.id));
        console.log(index);
        if (~index) {
            this.todos[index] = todo;
            this.writeLocalStorage();
        }
    }

    deleteTodo(todo: ITodo) {
        let index = this.todos.indexOf(todo);
        if ( ~index ) {
            this.todos.splice(index, 1);         
        }
        this.writeLocalStorage();
    }

    private readLocalStorage() {
        this.todos = [];

        let data = JSON.parse(localStorage.getItem('myTodos'));
        if (data) {
            this.todos = data;
        }
    }

    private writeLocalStorage() {
        localStorage.setItem('myTodos', JSON.stringify(this.todos));
    }
}