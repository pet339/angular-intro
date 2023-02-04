import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  { path: 'hotel', component: HotelComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: '', component: HotelComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
