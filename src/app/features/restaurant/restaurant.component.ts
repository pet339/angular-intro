import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Meal } from './models/meal';
import { RestaurantService } from './services/restaurant.service';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  providers: [RestaurantService]
})
export class RestaurantComponent implements OnInit {
  menu: Meal[] = []
  private orderList: Meal[] = []
  private total: number = 0
  orders$ = new Subject<any>()
  price$ = new BehaviorSubject(0); 
  constructor(private restaurantService: RestaurantService){}
  
  ngOnInit(): void {
    this.restaurantService.getMenu().subscribe(data => 
      this.menu = data
    )
  }
  
  postOrder(order: Meal){
    this.orderList.push(order)
    this.total += order.price
    this.price$.next(this.total)
    this.orders$.next(this.orderList)
  }

}
