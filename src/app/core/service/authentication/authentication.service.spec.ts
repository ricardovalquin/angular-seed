import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {StateService} from '@uirouter/core/lib';
import {User} from '../../model/user/user.model';

describe('AuthenticationService', () => {

  let authenticationServiceMock: AuthenticationService;
  let httpMock: HttpTestingController;
  const stateServiceStub = {
    go: () => true
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService, {provide: StateService, userValue: stateServiceStub}]
    });

    authenticationServiceMock = TestBed.get(AuthenticationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('login', () => {
    const userMock = new User(1, 'username', 'firstName', 'lastName', 'password');
    const response = userMock;
    authenticationServiceMock.login(userMock).subscribe(loggedUser => {
      expect(loggedUser).toBeTruthy();
    });
    const req = httpMock.expectOne('/api/authenticate');
    expect(req.request.method).toBe('POST');
    req.flush(response);
  });

});
