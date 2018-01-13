import {DashboardComponent} from './dashboard.component';
import {CategoryService} from '../../core/service/category/category.service';
import {Transition} from '@uirouter/core/lib';

export const state = {
  name: 'app.dashboard',
  url: '/home/:category?page',
  views: {
    'content@': {
      component: DashboardComponent
    }
  },
  data: {
    authorization: 'logged'
  },
  params: {
    category: {
      value: 'animation',
      dynamic: true
    },
    page: {
      value: '1',
      dynamic: true
    }
  },
  resolve: [
    {
      token: 'selectedCategory',
      deps: [CategoryService, Transition],
      resolveFn (categoryService: CategoryService, transition: Transition) {
        return categoryService.categoryList.toPromise().then(categories =>
          categories.find(category => category.id === transition.params().category));
      }
    }
  ]
};
