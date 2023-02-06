import { Component } from '@angular/core';
import { HotelService } from '../service/hotel.service';

export interface Hotel {
  name: string;
  city: string;
  category: string;
}

@Component({
  selector: 'app-hotel-table',
  templateUrl: './hotel-table.component.html',
  styleUrls: ['./hotel-table.component.scss']
})
export class HotelTableComponent {
  displayedColumns: string[] = ['name', 'city', 'category'];
  dataSource:Hotel[] = [];

  constructor(private hotelService: HotelService){
    hotelService.getHotelList().subscribe(hotelList =>
      this.dataSource = hotelList
    )
  }
  
}
