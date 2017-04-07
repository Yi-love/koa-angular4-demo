import {Component , Input} from '@angular/core';
import { User } from '../models/user.model';

import { UserService } from '../services/user.service';

@Component({
  selector:'upload',
  templateUrl:'/template/directive-demo/upload.component.html',
  providers:[UserService]
})
export class UploadComponent{
  @Input() userid: string;
  constructor (private userService: UserService) {}

  uploadImg(id:string){
    console.log(id);
  }
}