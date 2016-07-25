import { provideRouter, RouterConfig } from '@angular/router';
import { Form } from './models/form/form.component';
import { List } from './models/list/list.component';
import { Full } from './models/list/item-full.component';
import { ShareList } from './models/share/share.component';

const routes: RouterConfig = [
  { path: '', component: List },
  { path: 'show', component: List },
  { path: 'show/:id', component: Full },
  { path: 'create', component: Form },
  { path: 'edit/:id', component: Form },
  { path: 'share/:id', component: ShareList },
  
//   { path: 'heroes', component: HeroListComponent },
//   { path: 'hero/:id', component: HeroDetailComponent },
//   { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
