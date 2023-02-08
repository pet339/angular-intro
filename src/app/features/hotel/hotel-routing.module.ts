import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "src/app/core/guard/auth-guard.service";
import { HotelComponent } from "./hotel.component";

const routes: Routes = [
    { path: '', component: HotelComponent, canActivate: [AuthGuardService] }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HotelRoutingModule { }
  