import { Component , AfterViewChecked , ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../models/user.module';

import { UserService } from '../services/user.service';

@Component({
  selector:'new-hero',
  templateUrl: 'template/new-hero-demo/new-hero.component.html',
  styleUrls: ['css/new-hero-demo/new-hero.component.css']
})
export class NewHeroComponent implements AfterViewChecked{ 
  error:string;
  userString:string = '';
  ages = [12,34,56,65,45];
  userdef=true;
  user: User = new User();
  active=true;
  newHero:NgForm;
  @ViewChild('newHero') currentForm :NgForm;

  formErrors={
    'nickname':''
  }
  validationMessages = {
    'nickname':{
      'required':'nickname required'
    }
  }

  constructor(private userService : UserService){}
  onSubmit(e:any) {
    e.preventDefault();
    console.log('form value:' , this.user , this.newHero.form.get('nickname').valid);
    this.userString = JSON.stringify(this.user)+JSON.stringify(this.userdef);
    return false;
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged(){
    if(this.currentForm === this.newHero ) {
      return;
    }
    this.newHero = this.currentForm;
    if ( this.newHero ){
      this.newHero.valueChanges
      .subscribe(data=>this.onValueChanged(data));
    }
  }
  onValueChanged(data?:any){
    console.log('data',data);
    if ( !this.newHero ){
      return;
    }
    const form = this.newHero.form;
    for ( let filed in this.formErrors ){
      console.log('filed: ' , filed);
      this.formErrors[filed] = '';
      const control = form.get(filed);
      if( control && control.dirty && !control.valid ) {
        const messages = this.validationMessages[filed];
        for ( let key in messages ){
          this.formErrors[filed] += messages[key]+' ';
        }
      }
    }
  }

  saveUser(){
    this.userService.saveUser(this.user).then(user=>this.user=user);
  }
}