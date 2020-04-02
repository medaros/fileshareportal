import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginCheck() {
    // return this.http.post
    return "arosmed3@gmail.com"
  }
}
