import {VideoDetailsComponent} from './video-details.component';
import {VideoService} from '../../core/service/video/video.service';
import {Transition} from '@uirouter/core/lib';

export const state = {
  name: 'app.details',
  url: '/home/video/:videoId',
  views: {
    'content@': {
      component: VideoDetailsComponent
    }
  },
  data: {
    authorization: 'logged'
  },
  resolve: [
    {
      token: 'video',
      deps: [VideoService, Transition],
      resolveFn: (videoService: VideoService, trans: Transition) =>
        videoService.getVideoDetails(trans.params().videoId)
          .toPromise().then(video => {
          return video;
        })
    },
    {
      token: 'videoComments',
      deps: [VideoService, Transition],
      resolveFn: (videoService: VideoService, transition: Transition) =>
        videoService.getVideoComments(transition.params().videoId, 1)
          .toPromise().then(videoComments => videoComments)
    }
  ]
};
