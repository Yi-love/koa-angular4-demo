import {Component , Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({ 
   selector: '[userId]' 
})
export class UploadDirective{
  constructor(private el:ElementRef){}

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.border = '1px solid red';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.border = null;
  }
}