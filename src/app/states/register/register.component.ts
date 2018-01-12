import { Component, OnInit } from '@angular/core';
import {Transition, StateService} from '@uirouter/angular/lib';
import {UserService} from '../../core/service/user/user.service';
import {User} from '../../core/model/user/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User;

  constructor(private stateService: StateService, private userService: UserService) { }

  ngOnInit() {
    this.user = new User(0, '', '', '', '');
  }

  register() {
    this.userService.createUser(this.user).subscribe(() => {
      this.stateService.go('login');
    });
  }

}
