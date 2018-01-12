import {DashboardComponent} from './dashboard.component';
import {CategoryService} from '../../core/service/category/category.service';
import {Category} from '../../core/model/category/category';
import {Transition} from '@uirouter/core/lib';
import {VideoService} from '../../core/service/video/video.service';

export const state = {
  name: 'app.dashboard',
  url: '/home/:category?page',
  views: {
    'content@': {
      component: DashboardComponent
    }
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
