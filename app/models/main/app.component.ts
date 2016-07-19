import { Component } from '@angular/core';

import { Form } from '../form/form.component';
import { List } from '../list/list.component';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'my-app',
  templateUrl: './app/views/todo-main.html',
  directives: [Form, List],
  providers: [TodoService]
})

export class AppComponent {
  title: string = 'My Angular2 Todo List'
}
