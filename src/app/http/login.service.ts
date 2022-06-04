import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/http/api.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private readonly apiService: ApiService) {}

  public user!: string | null;

  public getUser() {
    this.apiService.profile().subscribe(
      (res) => {
        this.user = res.role.role;
      },
      (err) => {
        this.user = null;
      }
    );
  }
}
