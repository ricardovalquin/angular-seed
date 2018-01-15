import {RegisterComponent} from './register.component';

export const state = {
  name: 'register',
  url: '/register',
  data: {
    authorization: 'notLogged'
  },
  views: {
    'content@': {
      component: RegisterComponent
    }
  }
};
