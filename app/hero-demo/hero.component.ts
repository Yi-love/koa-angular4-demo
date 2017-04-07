import {Component} from '@angular/core';

@Component({
  selector:'hero-app',
  templateUrl:'/template/hero-demo/hero.component.html'
})
export class HeroComponent{
  getLabel(){
      console.log('run');
  }
}