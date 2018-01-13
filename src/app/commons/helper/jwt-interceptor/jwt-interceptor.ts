import {Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {vimeoAPIConfig} from '../../../config/vimeoAPI.config';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  private apiConfig = vimeoAPIConfig;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.apiConfig['accessToken']}`
        }
      });
    }
    return next.handle(request);
  }
}
