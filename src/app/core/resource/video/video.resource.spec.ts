import { TestBed, inject } from '@angular/core/testing';

import { VideoResource } from './video.resource';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Category} from '../../model/category/category';


fdescribe('VideoResource', () => {
  let videoResourceMock: VideoResource;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VideoResource]
    });

    videoResourceMock = TestBed.get(VideoResource);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([VideoResource], (service: VideoResource) => {
    expect(service).toBeTruthy();
  }));

  it('totalVideos', () => {
    videoResourceMock.totalVideos.subscribe(totalVideos => {
      expect(totalVideos).toBeTruthy();
    });
  });

  it('totalComments', () => {
    videoResourceMock.totalComments.subscribe(totalComments => {
      expect(totalComments).toBeTruthy();
    });
  });

  it('getVideosByCategory', () => {
    const response = {
      data: [{uri: '/2134567/2345', link: 'some url', name: 'videoName', pictures: {sizes: [{}, {}]}, stats: {plays: 12}}],
      total: 12};
    const category = new Category();
    category.id = 'animation';
    videoResourceMock.getVideosByCategory(category, 1).subscribe(videosResponse => {
      expect(videosResponse).toBeTruthy();
    });
    const req = httpMock.expectOne('https://api.vimeo.com/categories/animation/videos?page=1&per_page=12');
    expect(req.request.method).toBe('GET');
    req.flush(response);
  });

  it('searchVideos', () => {
    const response = {data: [
      {
        uri: '/some/url',
        link: 'link',
        name: 'name',
        pictures: {sizes: [{}, {}]},
        stats: {plays: 123},
        metadata: {},
        user: {},
        description: 'description',
        created_time: '123'}],
        total: 123
    };
    videoResourceMock.searchVideos('query', 1).subscribe(searchResponse => {
      expect(searchResponse).toBeTruthy();
    });
    const req = httpMock.expectOne('https://api.vimeo.com/videos/?page=1&per_page=12&query=query');
    expect(req.request.method).toBe('GET');
    req.flush(response);
  });

  // it('getVideoDetails', () => {
  //   const videoResponse = {data: {
  //     uri: '/some/url',
  //     link: 'link',
  //     name: 'name',
  //     pictures: {sizes: [{}, {}]},
  //     stats: {plays: 123},
  //     metadata: {},
  //     user: {},
  //     description: 'description',
  //     created_time: '123'}
  //   };
  //   const videoId = '80851591';
  //   videoResourceMock.getVideoDetails(videoId).subscribe(video => {
  //     expect(video).toBeTruthy();
  //   });
  //   const req = httpMock.expectOne('https://api.vimeo.com/videos/80851591');
  //   expect(req.request.method).toBe('GET');
  //   req.flush(videoResponse);
  // });

  // it('getVideoComments', () => {
  //   const response = {data: [
  //     {
  //       user: {},
  //       text: 'description',
  //       created_on: '123'}
  //   ],
  //     total: 123
  //   };
  //   videoResourceMock.getVideoComments('123', 1).subscribe(video => {
  //     expect(video).toBeTruthy();
  //   });
  //   const req = httpMock.expectOne('https://api.vimeo.com/videos/123/comments?page=1&per_page=8');
  //   expect(req.request.method).toBe('GET');
  //   req.flush(response);
  // });

});
