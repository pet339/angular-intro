import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { AuthInterceptor } from "src/app/core/interceptor/auth.interceptor";
import { SharedModule } from "src/app/shared/shared.module";
import { HotelFormComponent } from "./components/hotel-form/hotel-form.component";
import { HotelTableComponent } from "./components/hotel-table/hotel-table.component";
import { HotelRoutingModule } from "./hotel-routing.module";
import { HotelComponent } from "./hotel.component";

@NgModule({
    declarations: [
      HotelComponent,
      HotelFormComponent,
      HotelTableComponent
    ],
    imports: [
      HotelRoutingModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule,
      FormsModule,
      MatTableModule,
      CommonModule,
      SharedModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
    bootstrap: [HotelComponent]
  })
  export class HotelModule { }
  