import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {TranslateLoader} from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {

  return new MultiTranslateHttpLoader(http, [
    {prefix: 'src/app/states/login/lang/', suffix: '.json'},
    {prefix: 'src/app/states/register/lang/', suffix: '.json'},
    {prefix: 'src/app/commons/helper/navbar/lang/', suffix: '.json'},
    {prefix: 'src/app/states/video-details/lang/', suffix: '.json'},
  ]);
}

export class MultiTranslateHttpLoader implements TranslateLoader {

  constructor(private http: HttpClient, public resources: { prefix: string, suffix: string }[] = [{
    prefix: '**/**',
    suffix: '.json'
  }]) {
  }

  public getTranslation(lang: string): any {
    return Observable.forkJoin(this.resources.map(config => {
      return this.http.get(`${config.prefix}${lang}${config.suffix}`);
    })).map(response => {
      return response.reduce((a, b) => {
        return Object.assign(a, b);
      });
    });
  }
}
