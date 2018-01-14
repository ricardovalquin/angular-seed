import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import {HttpClient} from '@angular/common/http';
import {vimeoAPIConfig} from '../../../config/vimeoAPI.config';
import {Observable} from 'rxjs/Observable';
import {Category} from '../../model/category/category';

@Injectable()
export class CategoryResource {

  private apiConfig = vimeoAPIConfig;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get(`${this.apiConfig['apiBaseUrl']}categories`)
      .map((categories: any) => {
        return categories.data.map(category => {
          const uri = category.uri.split('/');
          category['id'] = uri[2];
          return category;
        });
      });
  }

}
