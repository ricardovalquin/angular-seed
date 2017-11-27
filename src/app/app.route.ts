import {AppComponent} from './app.component';
import {CategoryService} from './core/resource/category/category.service';

export const state = {
  name: 'app',
  abstract: true,
  component: AppComponent,
  resolve: [
    {
      token: 'categories',
      deps: [CategoryService],
      resolveFn: (catService) => catService.getCategories().toPromise()
        .then(categories => categories)
    }
  ]
};
