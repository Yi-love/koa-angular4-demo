import {Component , Input} from '@angular/core';
import { User } from '../models/user.model';

import { UserService } from '../services/user.service';

@Component({
    selector:'add-user',
    templateUrl:'/app/addUser.component.html',
    providers:[UserService]
})
export class AddUserComponent{
  error:string;
  @Input() userList: User[];
  constructor (private userService: UserService) {}

  addUser(nickname:string){
    if( !nickname ) {
      return;
    }
    this.userService.addUser(nickname).then(user=>this.userList.push(user) , error=>this.error=<any>error);
  }
}