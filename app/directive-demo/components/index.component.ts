import {Component , OnInit} from '@angular/core';
import { User } from '../models/user.model';

import { UserService } from '../services/user.service';

@Component({
  selector:'my-app',
  template:'<add-user [userList]="userList"></add-user><user-list [userList]="userList"></user-list>',
  providers: [ UserService ],
})
export class AppComponent implements OnInit{
  userList: User[];
  errorMessage: string;
  constructor (private userService: UserService) {}

  ngOnInit() { this.getAllUser();}

  getAllUser(){
    this.userService.getAllUser().then(userList=>this.userList=userList , error=>this.errorMessage=<any>error);
  }
}