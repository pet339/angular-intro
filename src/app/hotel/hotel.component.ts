import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HotelService } from '../service/hotel.service';

export interface Hotel {
  name: string;
  city: string;
  category: string;
}
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit{
  hotels: Hotel[] = [];
  hotels$ = new Subject<Hotel[]>()
 constructor(private hotelService: HotelService){ }
  ngOnInit(): void {
    this.hotelService.getHotelList().subscribe(hotelList => {
      this.hotels = hotelList
      this.hotels$.next(this.hotels)
    }
    )
  }

 saveHotel(hotel: Hotel){
  this.hotels.push(hotel)
  this.hotels$.next(this.hotels)
  this.hotelService.saveHotel(hotel).subscribe()
 }
}
