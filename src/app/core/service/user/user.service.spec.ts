import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import {of} from 'rxjs/observable/of';
import {UserResource} from '../../resource/user/user.resource';
import {User} from '../../model/user/user.model';

fdescribe('UserService', () => {

  let userServiceMock: UserService;
  let userResourceMock: UserResource;

  const userResourceStub = {
    createUser: () => {
      return of({});
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, {provide: UserResource, useValue: userResourceStub}]
    });

    userServiceMock = TestBed.get(UserService);
    userResourceMock = TestBed.get(UserResource);
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('createUser', () => {
    const user = new User(1, 'username', 'firstName', 'lastName', 'password');
    spyOn(userResourceMock, 'createUser').and.returnValue(of(user));
    userServiceMock.createUser(user).subscribe(createdUser => {
      expect(createdUser).toBeTruthy();
    });
    expect(userResourceMock.createUser).toHaveBeenCalled();
  });
});
