import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  // modify the return type to properly use the full response
  login(username: string, password: string): boolean {
    if (username != null && password !== null) {
      return true;
    } else {
      return false;
    }
    // implement here
  }

  getUserDetails(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/unknown');
  }
}
