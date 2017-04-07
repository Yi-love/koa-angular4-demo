import { Component ,OnInit } from '@angular/core';
import { User } from '../models/user.model';

import { UserService } from '../services/user.service';

@Component({
  selector:'dashboard-app',
  templateUrl:'/template/hero-routing/dashboard.component.html',
  styleUrls: ['/css/hero-routing/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:User[]=[];

  constructor (private userService: UserService) {}

  ngOnInit() { this.getAllUser();}

  getAllUser(){
    this.userService.getAllUser().then(userList=>this.users=userList);
  }
}