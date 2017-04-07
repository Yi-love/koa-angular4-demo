import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';

import { UserService } from '../services/user.service';

@Component({
  selector:'users-app',
  templateUrl:'/template/hero-routing/users.component.html',
  styleUrls: ['/css/hero-routing/users.component.css']
})
export class UsersComponent {
  users:User[];
  selectedUser: User;

  constructor ( private router: Router,
                private userService: UserService ) {}

  ngOnInit() { this.getAllUser();}

  getAllUser(){
    this.userService.getAllUser().then(userList=>this.users=userList);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser._id]);
  }
}