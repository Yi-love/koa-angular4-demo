import {Component , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'toh-hero-button',
  template: `<button>{{label}}</button>`
})
export class HeroButtonComponent {
  // No aliases
  @Output() click = new EventEmitter<any>();
  @Input() label: string;
  constructor(){
    this.click.emit(this.label);
  }
  
}