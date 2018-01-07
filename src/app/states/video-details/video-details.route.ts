import {VideoDetailsComponent} from './video-details.component';
import {VideoService} from '../../core/service/video/video.service';
import {Transition} from '@uirouter/core/lib';

export const state = {
  name: 'details',
  url: '/home/:categoryId/:videoId',
  component: VideoDetailsComponent,
  resolve: [
    {
      token: 'video',
      deps: [VideoService, Transition],
      resolveFn: (videoService: VideoService, trans: Transition) =>
        videoService.getVideoDetails(trans.params().categoryId, trans.params().videoId)
        .toPromise().then(video => {
          return video;
        })
    }
  ]
};
