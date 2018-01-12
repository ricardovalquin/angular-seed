import {RegisterComponent} from './register.component';

export const state = {
  name: 'register',
  url: '/register',
  views: {
    'content@': {
      component: RegisterComponent
    }
  }
};
