import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent {

  
  form: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.pattern("[A-Z][a-zA-Z ]*")
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.pattern("[A-Z ][a-zA-Z ]*")
    ]),
    category: new FormControl('', Validators.required)
  });

  categories: string[] = [
    "Hotel", "Apartman", "GuestHouse"
  ]
  @Input() error: string | null | undefined;
  saveHotel(){
    if(this.form.valid){
      //submit
    }
    else{
      this.error = "Fill all field to save!"
    }
  }
  
}
