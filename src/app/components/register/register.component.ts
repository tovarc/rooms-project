import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    admin: new FormControl(false, Validators.required),
  });

  get controls() {
    return this.registerForm.controls;
  }

  register(data: {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
  }) {
    this.apiService.register(data).subscribe(
      (res) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
