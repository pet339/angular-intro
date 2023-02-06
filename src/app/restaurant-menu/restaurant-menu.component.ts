import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from '../restaurant/restaurant.component';


@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantMenuComponent {
  headers: string[] = ["Image", "Product", "Price"]
  @Input() data: Meal[] = []
  @Output() EM = new EventEmitter()
  constructor(){}
  order(meal: Meal){
    this.EM.emit(meal)
  }
}
