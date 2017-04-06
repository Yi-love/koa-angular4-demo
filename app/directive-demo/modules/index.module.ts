import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { UserListComponent }  from '../components/userList.component';
import { AddUserComponent }  from '../components/addUser.component';
import { AppComponent } from '../components/index.component';
import { UploadComponent } from '../components/upload.component';
import { UploadDirective } from '../directives/upload.directive';

@NgModule({
  imports:      [ BrowserModule , HttpModule , JsonpModule ],
  declarations: [ AppComponent , UserListComponent ,AddUserComponent , UploadComponent, UploadDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}