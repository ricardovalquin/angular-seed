import {DashboardComponent} from './dashboard.component';
import {CategoryService} from '../../core/service/category/category.service';
export const state = {
  name: 'dashboard',
  url: '/home',
  component: DashboardComponent,
  resolve: [
    {
      token: 'categories',
      deps: [CategoryService],
      resolveFn: (catService: CategoryService) => catService.categoryList
        .toPromise().then(categories => categories)
    }
  ]
};
