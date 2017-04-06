import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ 
    selector: '[heroHighlight]'
})

export class HeroHighlightDirective implements OnChanges {
  
  @Input('heroHighlight') color: string;
  
  constructor(private el: ElementRef) {}

  ngOnChanges() {
    console.log('start ok');
    this.el.nativeElement.style.backgroundColor = this.color || 'yellow';
  }
}