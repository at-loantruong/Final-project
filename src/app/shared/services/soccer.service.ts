import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SoccersService {

  herderOptions: {};
  urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8000/api/';
    this.herderOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlci9sb2dpbiIsImlhdCI6MTUyNzczNTI2NiwiZXhwIjoxNTI3NzM4ODY2LCJuYmYiOjE1Mjc3MzUyNjYsImp0aSI6InRUeEpHOHhQNG1yY0RWd0EifQ.maRIY1zGOL0KS8FRY1IDqDpVQbTgZcHVYxvWZGHFHqk',
      })
    };
  }

  public getList(endPoint) {
    return this.http.get(this.urlApi + endPoint, this.herderOptions);
  }

}
