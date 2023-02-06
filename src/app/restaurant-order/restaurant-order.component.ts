import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from '../restaurant/restaurant.component';

@Component({
  selector: 'app-restaurant-order',
  templateUrl: './restaurant-order.component.html',
  styleUrls: ['./restaurant-order.component.scss']
})
export class RestaurantOrderComponent {
  headers: string[] = ["Product", "Price"]
  @Input() data: Meal[] = []
  constructor(){}
  
}
