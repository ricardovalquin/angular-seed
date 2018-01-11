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
    category: 'animation',
    page: '1'
  }, resolve: [
    {
      token: 'categories',
      deps: [CategoryService],
      resolveFn: (catService: CategoryService) => catService.categoryList
        .toPromise().then(categories => {
          catService.setSelectedCategory(categories[0]);
          return categories;
        })
    },
    {
      token: 'selectedCategory',
      deps: [CategoryService, Transition],
      resolveFn (categoryService: CategoryService, transition: Transition) {
        return categoryService.categoryList.toPromise().then(categories =>
          categories.find(category => category.id === transition.params().category));
      }
    },
    {
      token: 'categoryVideos',
      deps: [VideoService, Transition, 'selectedCategory'],
      resolveFn: (videoService: VideoService, trans: Transition, selectedCategory: Category) => videoService
        .getVideoList(selectedCategory, undefined, trans.params().page)
        .toPromise().then(categoryVideos => {
          return categoryVideos;
        })
    }
  ]
};
