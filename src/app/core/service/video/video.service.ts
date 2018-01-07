import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Video} from '../../model/video/video';
import {VideoResource} from '../../resource/video/video.resource';
import {Category} from '../../model/category/category';

@Injectable()
export class VideoService {

  constructor(private videoResource: VideoResource) {}

  getVideosByCategory(category: Category, page?: number): Observable<Video[]> {
    return this.videoResource.getVideosByCategory(category, page ? page : 1);
  }

  getVideoDetails(categoryId: string, videoId: string): Observable<Video> {
    return this.videoResource.getVideoDetails(categoryId, videoId);
  }
}
