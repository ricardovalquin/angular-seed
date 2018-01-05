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
          videos.push(new Video(dto.link, dto.name, dto.pictures.sizes[1], dto.uri));
        });
        return videos;
      });
  }
}
