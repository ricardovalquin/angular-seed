import {AppComponent} from './app.component';
import {CategoryResource} from './core/resource/category/category.resource';
import {CategoryService} from './core/service/category/category.service';

export const state = {
  name: 'app',
  abstract: true,
  component: AppComponent,
  resolve: [
    {
      token: 'categories',
      deps: [CategoryResource],
      resolveFn: (catService) => catService.getCategories()
        .toPromise()
        .then(categories => categories)
    }
  ]
};
