import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'hotel', loadChildren: () => import('./features/hotel/hotel.module').then(m => m.HotelModule) },
  { path: 'restaurant', loadChildren: () => import('./features/restaurant/restaurant.module').then(m => m.RestaurantModule) },
  { path: '', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
