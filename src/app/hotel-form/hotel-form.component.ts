import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HotelService } from '../service/hotel.service';

export interface Hotel {
  name: string;
  city: string;
  category: string;
}
@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent {
  constructor(private hotelService: HotelService){}
  form: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.pattern("[A-Z][a-zA-Z ]*")
    ]),
    city: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.pattern("[A-Z ][a-zA-Z ]*")
    ]),
    category: new FormControl(null, Validators.required),
  });

  categories: string[] = [
    "Hotel", "Apartman", "GuestHouse"
  ]
  error = "Fill all field to save!"
  saveHotel(){
    if(this.form.valid){
      this.hotelService.saveHotel(this.form.value).subscribe()
    }
  }
  
}
