import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './http/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    public readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loginService.getUser();
  }

  logout() {
    localStorage.removeItem('Authorization');
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
    this.loginService.getUser();
  }
}
