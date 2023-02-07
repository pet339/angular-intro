import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export interface User{
  email: string,
  username: string,
  id: number,
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser$ = new Subject<User>()
  constructor(private httpClient: HttpClient) { }

  login(user: any){
    this.httpClient.post<User>("http://localhost:3333/login", user)
    .subscribe(user => this.currentUser$.next(user))
  }
}
