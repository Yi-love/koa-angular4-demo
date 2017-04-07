import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../models/user.model';

import { UserService } from '../services/user.service';

@Component({
  selector:'hero-detail-app',
  templateUrl:'/template/hero-routing/user-detail.component.html',
  styleUrls: ['/css/hero-routing/user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  user:User;
  error:string;
  constructor(private userService:UserService,
              private route : ActivatedRoute , 
              private location : Location ){}

  ngOnInit(): void{
    this.route.params
              .subscribe(params=>this.userService.getUserById(params['id'])
              .then(user=>this.user=user,error=>this.error=error));
  }
  goBack(): void {
    this.location.back();
  }
}