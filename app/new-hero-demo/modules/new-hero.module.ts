import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { UserService } from '../services/user.service';

import { NewHeroComponent } from '../components/new-hero.component';

@NgModule({
  imports : [ BrowserModule ,
              HttpModule ,
              FormsModule
  ],
  declarations: [ NewHeroComponent ],
  providers: [ UserService ],
  bootstrap: [ NewHeroComponent ]
})
export class AppModule { }