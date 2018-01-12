import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../../model/user/user.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserResource {

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post(`/api/users`, user).map((userDto: User) => {
      return new User(userDto.id, userDto.username, userDto.firstName, userDto.lastName, userDto.password);
    });
  }

}
