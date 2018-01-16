import { TestBed, inject } from '@angular/core/testing';

import { VideoService } from './video.service';
import {VideoResource} from '../../resource/video/video.resource';
import {of} from 'rxjs/observable/of';
import {Category} from '../../model/category/category';

describe('VideoService', () => {

  let videoServiceMock: VideoService;
  let videoResourceMock: VideoResource;

  const videoResourceStub = {
    getVideosByCategory: () => {
      return of([{id: 1}]);
    },
    searchVideos: () => {
      return of([{id: 1}]);
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoService, {provide: VideoResource, useValue: videoResourceStub}]
    });

    videoServiceMock = TestBed.get(VideoService);
    videoResourceMock = TestBed.get(VideoResource);
  });

  it('should be created', inject([VideoService], (service: VideoService) => {
    expect(service).toBeTruthy();
  }));

  // it('updateVideoList called with category', () => {
  //   const category = new Category();
  //   spyOn(videoResourceMock, 'getVideosByCategory').and.callThrough();
  //   videoServiceMock.updateVideoList(category, null, 1);
  //   expect(videoResourceMock.getVideosByCategory).toHaveBeenCalled();
  // });

  // it('updateVideoList called with search term', () => {
  //   const videoList = [{id: 1}];
  //   spyOn(videoResourceMock, 'searchVideos').and.returnValue(of(videoList));
  //   videoServiceMock.updateVideoList(undefined, 'term', 1);
  //   expect(videoResourceMock.searchVideos).toHaveBeenCalled();
  // });

});
