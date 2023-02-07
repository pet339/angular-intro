import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(private httpClient: HttpClient) {
    
  }
  submit() {
    if (this.form.valid) {
      this.httpClient.post("http://localhost:3333/login", this.form.value).subscribe()
    }
  }
  error: string | null = "Email or password invalid"

}
