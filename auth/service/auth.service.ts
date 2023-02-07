import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';

export interface User{
  email: string,
  username: string,
  id: number
}
export interface LoginResponse{
  user: User,
  accessToken: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  private currentUser$ = new Subject<User>()
  constructor(private httpClient: HttpClient) { }

  login(user: any){
    this.httpClient.post<LoginResponse>("http://localhost:3333/login", user)
    .subscribe(res => {
      this.currentUser$.next(res.user)
      localStorage.setItem('token', JSON.stringify(res.accessToken));
    })
  }
  isAuthenticated():boolean {
    const token = localStorage.getItem("token")
    return !this.jwtHelper.isTokenExpired(token);
  }
  
}
