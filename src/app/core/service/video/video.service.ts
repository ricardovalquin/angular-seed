import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Video} from '../../model/video/video';
import {VideoResource} from '../../resource/video/video.resource';
import {Category} from '../../model/category/category';

@Injectable()
export class VideoService {

  private _videoList: Observable<Video[]>;

  constructor(private videoResource: VideoResource) {}

  getVideoList(category?: Category, query?: string, page?: number): Observable<Video[]> {
    if (category) {
      this._videoList = this.videoResource.getVideosByCategory(category, page ? page : 1);
    } else if (query) {
      this._videoList = this.videoResource.searchVideos(query, page ? page : 1);
    }
    return this._videoList;
  }

  // getVideosByCategory(category: Category, page?: number): Observable<Video[]> {
  //   return this.videoResource.getVideosByCategory(category, page ? page : 1);
  // }
  //
  // searchVideos(query: string, page?: number): Observable<Video[]> {
  //   return this.videoResource.searchVideos(query, page ? page : 1);
  // }

  getVideoDetails(categoryId: string, videoId: string): Observable<Video> {
    return this.videoResource.getVideoDetails(categoryId, videoId);
  }
}
