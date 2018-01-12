import {LoginComponent} from './login.component';

export const state = {
  name: 'login',
  url: '/login',
  views: {
    'content@': {
      component: LoginComponent
    }
  }
};
