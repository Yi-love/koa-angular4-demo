import {Component , OnInit} from '@angular/core';
import { User } from './user';

import { UserService } from './index.service';

@Component({
    selector:'my-app',
    templateUrl:'/component/index.component.html',
    providers: [ UserService ]
})
export class AppComponent implements OnInit{
  name = 'Jin';
  userList: User[];
  errorMessage: string;

  constructor (private userService: UserService) {}

  ngOnInit() { this.getAllUser();}

  getAllUser(){
    this.userService.getAllUser().subscribe(userList=>this.userList=userList);
  }
}