import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Form } from '../form/form.component';
import { List } from '../list/list.component';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'my-app',
  templateUrl: './app/views/todo-main.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [TodoService]
})

export class AppComponent {

}
