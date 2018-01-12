import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StateService } from '@uirouter/angular/lib';
import 'rxjs/add/operator/map';
import {User} from '../../model/user/user.model';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private stateService: StateService) {}

  login(user): Observable<User> {
    return this.http.post(`/api/authenticate`, {username: user.username, password: user.password})
      .map((userResponse: any) => {
      if (userResponse && userResponse.token) {
        localStorage.setItem('currentUser', JSON.stringify(userResponse));
      }
      return user;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.stateService.go('login');

  }

}
