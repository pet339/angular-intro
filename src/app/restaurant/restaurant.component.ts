import { Component, Input } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { RestaurantService } from '../service/restaurant.service';

export interface Meal {
  productName: string;
  price: number;
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
  //menu$: Observable<Meal[]> = new Subject<Meal[]>().asObservable()
  private orderList: Meal[] = []
  orders$ = new Subject<any>();
  constructor(private restaurantService: RestaurantService){
    restaurantService.getMenu().subscribe(data => 
      this.menu = data
    )
  }
  
  postOrder(order: Meal){
    this.orderList.push(order)
    this.orders$.next(this.orderList)
  }

}
