import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'auth/service/auth-guard.service';
import { HotelComponent } from './hotel/hotel.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'hotel', component: HotelComponent, canActivate: [AuthGuardService] },
  { path: 'restaurant', component: RestaurantComponent, canActivate: [AuthGuardService] },
  { path: '', component: LoginFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
