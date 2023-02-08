import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { AuthInterceptor } from "src/app/core/interceptor/auth.interceptor";
import { RestaurantMenuComponent } from "./components/restaurant-menu/restaurant-menu.component";
import { RestaurantOrderComponent } from "./components/restaurant-order/restaurant-order.component";
import { RestaurantRoutingModule } from "./restaurant-routing.module";
import { RestaurantComponent } from "./restaurant.component";

@NgModule({
    declarations: [
        RestaurantComponent,
        RestaurantOrderComponent,
        RestaurantMenuComponent
    ],
    imports: [
      CommonModule,
      RestaurantRoutingModule,
      MatSelectModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
    bootstrap: [RestaurantComponent]
  })
  export class RestaurantModule { }