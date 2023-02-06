import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Meal } from '../restaurant/restaurant.component';

@Component({
  selector: 'app-restaurant-order',
  templateUrl: './restaurant-order.component.html',
  styleUrls: ['./restaurant-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantOrderComponent {
  headers: string[] = ["Product", "Price"]
  @Input() data$: Observable<Meal[]> = new Subject<Meal[]>().asObservable()
  price: number = 0
  constructor(){ 
    this.data$.subscribe( meal =>
    meal.map( meal => {
      this.price += meal.price
    })
  ) 
  }

}
