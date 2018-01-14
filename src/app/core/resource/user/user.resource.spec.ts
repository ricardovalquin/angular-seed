import { TestBed, inject } from '@angular/core/testing';

import { UserResource } from './user.resource';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

fdescribe('UserService', () => {
  let userResourceMock: UserResource;
  let httpMock: HttpTestingController;
  const newUserMock = {id: 1, username: 'username', firstName: 'firstName', lastName: 'lastName', password: 'asdf'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserResource]
    });

    userResourceMock = TestBed.get(UserResource);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([UserResource], (service: UserResource) => {
    expect(service).toBeTruthy();
  }));

  it('create user', () => {
    userResourceMock.createUser(newUserMock).subscribe(newUser => {
      expect(newUser.id).toBe(1);
    });
  });
});
