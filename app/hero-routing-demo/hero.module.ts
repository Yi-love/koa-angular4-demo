import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HeroComponent } from './components/hero.component';
import { UsersComponent } from './components/users.component';
import { DashboardComponent } from './components/dashboard.component';
import { UserDetailComponent } from './components/user-detail.component';
import { HeroRoutingModule } from './hero-routing.module';
import { UserService } from './services/user.service';

@NgModule({
  imports:[ BrowserModule ,
            HeroRoutingModule,
            FormsModule ,
            HttpModule ,
            JsonpModule 
  ],
  declarations:[HeroComponent,
                DashboardComponent,
                UsersComponent,
                UserDetailComponent
  ],
  providers: [ UserService ],
  bootstrap:[ HeroComponent ]
})

export class AppModule { }