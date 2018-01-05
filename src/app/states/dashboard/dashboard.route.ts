import {DashboardComponent} from './dashboard.component';
import {CategoryService} from '../../core/service/category/category.service';
import {Category} from '../../core/model/category/category';
import {Transition} from "@uirouter/core/lib";

export const state = {
  name: 'dashboard',
  url: '/home/:category?page',
  component: DashboardComponent,
  params: {
    page: '1'
  },
  resolve: [
    {
      token: 'categories',
      deps: [CategoryService],
      resolveFn: (catService: CategoryService) => catService.categoryList
        .toPromise().then(categories => categories)
    },
    {
      token: 'selectedCategory',
      deps: [Transition, 'categories'],
      resolveFn (trans, categories: Category[]) {
        return categories.find(category => category.id === trans.params().category);
      }
    }
  ]
};
