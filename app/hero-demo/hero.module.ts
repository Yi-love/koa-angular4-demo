import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { HeroHighlightDirective }  from './hero-highlight.directive';
import { HeroButtonComponent }  from './hero-button.component';
import { HeroComponent } from './hero.component';


@NgModule({
  imports:      [ BrowserModule , HttpModule , JsonpModule ],
  declarations: [ HeroComponent , HeroButtonComponent ,HeroHighlightDirective],
  bootstrap:    [ HeroComponent ]
})
export class AppModule {}