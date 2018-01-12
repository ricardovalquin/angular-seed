import {Injectable} from '@angular/core';
import {vimeoAPIConfig} from '../../../config/vimeoAPI.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Video} from '../../model/video/video';
import {Category} from '../../model/category/category';
import {Subject} from 'rxjs/Subject';
import {Comment} from '../../model/comment/comment';

@Injectable()
export class VideoResource {

  private apiConfig = vimeoAPIConfig;
  private _totalVideos: Subject<number>;
  private _totalComments: Subject<number>;

  get totalVideos(): Subject<number> {
    return this._totalVideos;
  }

  get totalComments(): Subject<number> {
    return this._totalComments;
  }

  constructor(private http: HttpClient) {
    this._totalVideos = new Subject();
    this._totalComments = new Subject();
  }

  getVideosByCategory(category: Category, page: number): Observable<Video[]> {
    return this.http.get(`${this.apiConfig['apiBaseUrl']}categories/${category.id}/videos?page=
    ${page}&per_page=12&access_token=${this.apiConfig['accessToken']}`)
      .map((response: any) => {
        this._totalVideos.next(response.total);
        const videos: Video[] = [];
        response.data.forEach(dto => {
          dto.uri = dto.uri.split('/')[2];
          videos.push(new Video(dto.link, dto.name, dto.pictures.sizes[1], dto.uri, dto.stats.plays, dto.metadata,
            dto.user, dto.description, dto.created_time));
        });
        return videos;
      });
  }

  searchVideos(query: string, page: number): Observable<Video[]> {
    return this.http.get(`${this.apiConfig['apiBaseUrl']}videos/?page=
    ${page}&per_page=12&query=${query}&access_token=${this.apiConfig['accessToken']}`)
      .map((response: any) => {
        this._totalVideos.next(response.total);
        const videos: Video[] = [];
        response.data.forEach(dto => {
          dto.uri = dto.uri.split('/')[2];
          videos.push(new Video(dto.link, dto.name, dto.pictures.sizes[1], dto.uri, dto.stats.plays, dto.metadata,
            dto.user, dto.description, dto.created_time));
        });
        return videos;
      });
  }

  getVideoDetails(videoId: string): Observable<Video> {
    return this.http.get(`
    ${this.apiConfig['apiBaseUrl']}videos/${videoId}?access_token=${this.apiConfig['accessToken']}
    `).map((dto: any) => {
      dto.uri = dto.uri.split('/')[2];
      return new Video(dto.link, dto.name, dto.pictures.sizes[1], dto.uri, dto.stats.plays, dto.metadata,
        dto.user, dto.description, dto.created_time);
      });
  }

  getVideoComments(videoId: string, page: number): Observable<Comment[]> {
    return this.http.get(`
    ${this.apiConfig['apiBaseUrl']}videos/${videoId}/comments?page=
    ${page}&per_page=8&access_token=${this.apiConfig['accessToken']}`).map((response: any) => {
      this._totalComments.next(response.total);
      const videoComments: Comment[] = [];
      response.data.forEach(dto => {
        videoComments.push(new Comment(dto.created_on, dto.text, dto.user));
      });
      return videoComments;
    });
  }
}
