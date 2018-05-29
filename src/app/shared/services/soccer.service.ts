import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
 @Injectable()
 export class SoccersService {

  constructor (private http: HttpClient) {
  }

  public getList() {
    return this.http.get('http://localhost:8000/api/soccers');
  }

 }
