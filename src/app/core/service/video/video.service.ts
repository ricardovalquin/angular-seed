import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Video} from '../../model/video/video';
import {VideoResource} from '../../resource/video/video.resource';
import {Category} from '../../model/category/category';
import {Comment} from '../../model/comment/comment';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class VideoService {

  private _videoList: BehaviorSubject<Video[]>;
  private _totalVideos: Subject<number>;
  private _totalComments: Subject<number>;

  get totalVideos(): Subject<number> {
    return this._totalVideos;
  }

  get totalComments(): Subject<number> {
    return this._totalComments;
  }

  constructor(private videoResource: VideoResource) {
    this._videoList = new BehaviorSubject([]);
    this._totalVideos = new Subject();
    this._totalComments = new Subject();
  }

  get videoList(): Subject<Video[]> {
    return this._videoList;
  }

  updateVideoList(category?: Category, query?: string, page?: number) {
    if (category) {
      this.videoResource.getVideosByCategory(category, page ? page : 1).subscribe(videos => this._videoList.next(videos));
    } else if (query) {
      this.videoResource.searchVideos(query, page ? page : 1).subscribe(videos => this._videoList.next(videos));
    }
    this.videoResource.totalVideos.subscribe(total => {
      this._totalVideos.next(total);
    });
  }

  getVideoDetails(videoId: string): Observable<Video> {
    return this.videoResource.getVideoDetails(videoId);
  }

  getVideoComments(videoId: string, page: number): Observable<Comment[]> {
    this.updateTotalComments();
    return this.videoResource.getVideoComments(videoId, page);
  }

  updateTotalComments(): void {
    this.videoResource.totalComments.subscribe(totalComments => this._totalComments.next(totalComments));
  }
}
