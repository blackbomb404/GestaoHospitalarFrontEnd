import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthenticationRequest } from '../models/AuthenticationRequest';
import { AuthenticationResponse } from '../models/AuthenticationResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public authenticate(credentials: AuthenticationRequest){
    return this.http.post<AuthenticationResponse>('http://localhost:8080/authenticate', credentials).pipe(
      map(userData => {
        localStorage.setItem('token', 'Bearer ' + userData.jwt);
        return userData;
      })
    );
  }

  isUserLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if(!token || !token.startsWith('Bearer '))
      return false;

    const payload = atob(token.split('.')[1]);
    const parsedPayload = JSON.parse(payload);
    return parsedPayload.exp > Date.now() / 1000;
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
