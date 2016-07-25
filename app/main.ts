import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './models/main/app.component';
import { appRouterProviders } from './routes';

bootstrap(AppComponent, [
  appRouterProviders
]).catch(err => console.error(err));;
