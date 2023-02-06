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
  @Input() price$: Observable<number> = new Subject<number>().asObservable()
  constructor(){ }

}
