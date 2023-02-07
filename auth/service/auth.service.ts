import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
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
  
  currentUser = new Subject<User>()
  constructor(private httpClient: HttpClient) { }

  login(user: any){
    this.httpClient.post<LoginResponse>("http://localhost:3333/login", user)
    .subscribe(res => {
      this.currentUser.next(res.user)
      localStorage.setItem('id_token', JSON.stringify(res.accessToken));
    })
  }
  
  
}
