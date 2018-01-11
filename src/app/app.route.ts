import {AppComponent} from './app.component';
import {NavbarComponent} from './commons/helper/navbar/navbar.component';
import {SearchComponent} from './commons/helper/search/search.component';

export const state = {
  name: 'app',
  abstract: true,
  component: AppComponent,
  views: {
    'search@': {
      component: SearchComponent
    },
    'navbar@': {
      component: NavbarComponent
    }
  }
};
