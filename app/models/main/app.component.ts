import { Component } from '@angular/core';

import { List } from '../list/list.component';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'my-app',
  templateUrl: './app/views/todo-main.html',
  directives: [List],
  providers: [TodoService]
})

export class AppComponent {
  title: string = 'My Angular2 Todo List'
}
