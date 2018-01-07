import {Injectable} from '@angular/core';
import {vimeoAPIConfig} from '../../../config/vimeoAPI.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Video} from '../../model/video/video';
import {Category} from '../../model/category/category';

@Injectable()
export class VideoResource {

  private apiConfig = vimeoAPIConfig;

  constructor(private http: HttpClient) {}

  getVideosByCategory(category: Category, page: number): Observable<Video[]> {
    return this.http.get(`${this.apiConfig['apiBaseUrl']}categories/${category.id}/videos?page=
    ${page}&per_page=12&access_token=${this.apiConfig['accessToken']}`)
      .map((response: any) => {
        const videos: Video [] = [];
        response.data.forEach(dto => {
          dto.uri = dto.uri.split('/')[2];
          videos.push(new Video(dto.link, dto.name, dto.pictures.sizes[1], dto.uri));
        });
        return videos;
      });
  }

  getVideoDetails(category: string, video: string): Observable<Video> {
    return this.http.get(`
    ${this.apiConfig['apiBaseUrl']}categories/${category}/videos/${video}?access_token=${this.apiConfig['accessToken']}
    `).map((response: any) => {
        return response;
      });
  }
}
