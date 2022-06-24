import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public add(user: any){
    console.log(user);
    return this.http.post('http://localhost:8080/user', user, { responseType: 'text' });
  }
}
