import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'auth/service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('admin@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('admin', Validators.required),
  });
  constructor(private authService: AuthService) { }
  submit() {
    if (this.form.valid) {
      this.authService.login(this.form.value)
    }
  }
  error: string | null = "Email or password invalid"
  
}
