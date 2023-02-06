import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  url:string = "http://localhost:3000/meals"
  constructor(private httpClient: HttpClient) { }
  getMenu(){
    return this.httpClient.get<any[]>(this.url)
  }
}
