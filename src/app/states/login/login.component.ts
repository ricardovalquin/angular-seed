import { Component, OnInit } from '@angular/core';
import {Transition, StateService} from '@uirouter/angular/lib';
import {AuthenticationService} from '../../core/service/authentication/authentication.service';
import {User} from '../../core/model/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public loading: boolean;
  public user: User;

  constructor(private stateService: StateService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loading = true;
    this.user = new User(0, '', '', '', '');
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.user).subscribe(() => {
      this.stateService.go('app.dashboard', {category: 'animation', page: 1});
    });
  }

}
