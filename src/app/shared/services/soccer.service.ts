import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SoccersService {

  herderOptions: {};
  urlApi: string;
  access_token: string;
  authorization: string;
  isLogon: boolean;
  userLoginInfo: {};

  subjectUser = new Subject<User>();
  // subjecSelectArticle = new Subject<User>();

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8000/api/';
    this.access_token = localStorage.getItem('access_token');
    this.authorization = 'Bearer ' + this.access_token;

    this.herderOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authorization,
      })
    };

    this.getUserInfo('user').subscribe(data => {
      this.userLoginInfo = data;
    });
  }

  userInfoObsever () {
    return this.subjectUser.asObservable();
  }

  public getList(endPoint) {
    return this.http.get(this.urlApi + endPoint, this.herderOptions);
  }

  public login (endPoint, userInfo) {
    return this.http.post( this.urlApi + endPoint, userInfo);
  }

  public logout (endPoint) {
    return this.http.post( this.urlApi + endPoint, this.herderOptions);
  }

  public getUserInfo (endPoint) {
    return this.http.get(this.urlApi + endPoint + '?token=' + this.access_token);
  }
}
