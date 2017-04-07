import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../models/user.module';

@Injectable()
export class UserService {
  
  private saveUserUrl = 'api/saveUser';

  constructor( private http: Http ){ }

  saveUser(user:User): Promise<User> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.saveUserUrl ,{user} , options)
             .toPromise()
             .then(this.extractAddUser)
             .catch(this.handleError);
  }

  private extractAddUser(res: Response){
    let body = res.json();
    if( +body.code !== 0 ) {
      return Promise.reject(body);
    }
    return body.user;
  }
  private handleError (error: Response | any) {
    let errMsg: string;
     if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.msg ? error.msg : error.toString();
    }
    return Promise.reject(errMsg);
  }
}