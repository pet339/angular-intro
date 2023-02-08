import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-intro';
  link = environment.link;
  name = environment.name;
  code = environment.code;
  constructor(){
    console.log("This app is running in the " + this.name + " with code " + this.code)
  }
}
