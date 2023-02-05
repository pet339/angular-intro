import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url:string = "http://localhost:3000/hotels"
  constructor(private httpClient: HttpClient) { }
  saveHotel(hotel: any){
    return this.httpClient.post<any>(this.url, hotel)
  }
  getHotelList(){
    return this.httpClient.get<any[]>(this.url)
  }
}
