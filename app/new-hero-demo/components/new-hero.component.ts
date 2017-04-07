import { Component } from '@angular/core';

import { User } from '../models/user.module';

import { UserService } from '../services/user.service';

@Component({
  selector:'new-hero',
  templateUrl: 'template/new-hero-demo/new-hero.component.html',
  styleUrls: ['css/new-hero-demo/new-hero.component.css']
})
export class NewHeroComponent { 
  error:string;
  userString:string = '';
  user: User = new User();

  constructor(private userService : UserService){}
  onSubmit(e:any) {
    e.preventDefault();
    console.log('form value:' , this.user);
    this.userString = JSON.stringify(this.user);
    return false;
  }
  saveUser(){
    this.userService.saveUser(this.user).then(user=>this.user=user);
  }
}