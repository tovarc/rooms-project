import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';
import { LoginService } from 'src/app/http/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private readonly apiService: ApiService,
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  error!: string;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  get controls() {
    return this.loginForm.controls;
  }

  login(data: { email: string; password: string }) {
    this.apiService.login(data).subscribe(
      (res) => {
        localStorage.setItem('Authorization', res.access_token);
        this.loginService.getUser();
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      },
      (err) => {
        this.error = 'Invalid email and/or password.';
      }
    );
  }
}
