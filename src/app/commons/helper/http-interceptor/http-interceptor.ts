import {Injectable} from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import {User} from '../../../core/model/user/user.model';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const users: User[] = JSON.parse(localStorage.getItem('users')) || [];

    return Observable.of(null).mergeMap(() => {
      // authentication
      if (request.url.endsWith('/api/authenticate') && 'POST' === request.method) {
        const filteredUsers = users.filter(user => {
          return user.username === request.body.username && user.password === request.body.password;
        });

        if (filteredUsers.length) {
          const user = filteredUsers[0];
          const body = {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            token: 'fake-jwt-token'
          };
          return Observable.of(new HttpResponse({status: 200, body: body}));
        } else {
          return Observable.throw('sorry... incorrect username or password');
        }
      }

      // create user
      if (request.url.endsWith('/api/users') && 'POST' === request.method) {
        const userDto = request.body;
        const newUser = new User(0, userDto.username, userDto.firstName, userDto.lastName, userDto.password);
        const duplicateUser = users.filter(user => user.username === newUser.username);
        if (duplicateUser.length > 0) {
          return Observable.throw(`Username: ${newUser.username} already exist`);
        }
        newUser.id = users.length + 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        return Observable.of(new HttpResponse({status: 200, body: newUser}));
      }

      return next.handle(request);
    })
      .materialize()
      .delay(100)
      .dematerialize();
  }

}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
