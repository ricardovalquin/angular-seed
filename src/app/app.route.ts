import {AppComponent} from './app.component';
import {NavbarComponent} from './commons/helper/navbar/navbar.component';
import {SearchComponent} from './commons/helper/search/search.component';
import {CategoryService} from './core/service/category/category.service';
import {Category} from './core/model/category/category';
import {Transition} from '@uirouter/core/lib';
import {VideoService} from './core/service/video/video.service';
import {DashboardComponent} from './states/dashboard/dashboard.component';

export const state = {
  name: 'app',
  abstract: true,
  component: AppComponent,
  views: {
    'search@': {
      component: SearchComponent
    },
    'navbar@': {
      component: NavbarComponent
    }
  },
  resolve: [
    // {
    //   token: 'categories',
    //   deps: [CategoryService],
    //   resolveFn: (catService: CategoryService) => catService.categoryList
    //     .toPromise().then(categories => {
    //       catService.setSelectedCategory(categories[0]);
    //       return categories;
    //     })
    // },
    // {
    //   token: 'selectedCategory',
    //   deps: [Transition, 'categories'],
    //   resolveFn (trans, categories: Category[]) {
    //     return categories.find(category => category.id === trans.params().category);
    //   }
    // },
    // {
    //   token: 'categoryVideos',
    //   deps: [VideoService, 'selectedCategory', Transition],
    //   resolveFn: (videoService: VideoService, selectedCategory: Category, trans: Transition) => videoService
    //     .getVideosByCategory(selectedCategory, trans.params().page)
    //     .toPromise().then(categoryVideos => categoryVideos)
    // }
  ]
};
