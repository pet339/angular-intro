import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { SharedButtonComponent } from "./components/shared-button/shared-button.component";

@NgModule({
    declarations: [SharedButtonComponent],
      imports: [CommonModule, MatButtonModule],
    exports: [SharedButtonComponent]
  })
  export class SharedModule {}