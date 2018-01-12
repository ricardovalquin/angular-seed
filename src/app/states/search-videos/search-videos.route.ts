import {SearchVideosComponent} from './search-videos.component';

export const state = {
  name: 'app.search',
  url: '/home/search?term&page=',
  views: {
    'content@': {
      component: SearchVideosComponent
    }
  },
  params: {
    term: {
      value: 'asdf',
      dynamic: true
    },
    page: {
      value: '1',
      dynamic: true
    }
  }
};
