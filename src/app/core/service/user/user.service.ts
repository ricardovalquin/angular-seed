import { Injectable } from '@angular/core';
import {UserResource} from '../../resource/user/user.resource';
import {Observable} from 'rxjs/Observable';
import {User} from '../../model/user/user.model';

@Injectable()
export class UserService {

  constructor(private userResource: UserResource) { }

  createUser(user: User): Observable<User> {
    return this.userResource.createUser(user);
  }
}
