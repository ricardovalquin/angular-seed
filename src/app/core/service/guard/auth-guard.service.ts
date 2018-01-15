import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthGuardService {

  constructor() { }

  userIsLogged(): Observable<boolean> {
    return Observable.of(!!localStorage.getItem('currentUser'));
  }

}
