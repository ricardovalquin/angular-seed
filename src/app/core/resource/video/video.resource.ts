import {Injectable} from '@angular/core';
import {vimeoAPIConfig} from '../../../config/vimeoAPI.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Video} from '../../model/video/video';
import {Category} from '../../model/category/category';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class VideoResource {

  private apiConfig = vimeoAPIConfig;
  private _totalVideos: Subject<number>;

  get totalVideos(): Subject<number> {
    return this._totalVideos;
  }

  constructor(private http: HttpClient) {
    this._totalVideos = new Subject();
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
            dto.user, dto.description));
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
            dto.user, dto.description));
        });
        return videos;
      });
  }

  getVideoDetails(video: string): Observable<Video> {
    return this.http.get(`
    ${this.apiConfig['apiBaseUrl']}videos/${video}?access_token=${this.apiConfig['accessToken']}
    `).map((dto: any) => {
      dto.uri = dto.uri.split('/')[2];
      return new Video(dto.link, dto.name, dto.pictures.sizes[1], dto.uri, dto.stats.plays, dto.metadata,
        dto.user, dto.description);
      });
  }
}
