import { Component, Input } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';

export interface Meal {
  productName: string;
  price: string;
  imgUrl: string;
}
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  providers: [RestaurantService]
})
export class RestaurantComponent {
  menu: Meal[] = []
  orders: Meal[] = []
  constructor(private restaurantService: RestaurantService){
    restaurantService.getMenu().subscribe(data => 
      this.menu = data
    )
  }
  
  postOrder(order: Meal){
    this.orders.push(order)
    console.log(this.orders)
  }

}
