import {LoginComponent} from './login.component';

export const state = {
  name: 'login',
  url: '/login',
  data: {
    authorization: 'notLogged'
  },
  views: {
    'content@': {
      component: LoginComponent
    }
  }
};
