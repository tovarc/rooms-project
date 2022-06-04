import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/http/api.service';
import { LoginService } from 'src/app/http/login.service';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
})
export class InternalComponent implements OnInit {
  constructor(
    private readonly apiService: ApiService,
    public readonly loginService: LoginService
  ) {}

  rooms: any = [];
  professors: any = [];

  ngOnInit(): void {
    this.apiService.getRooms().subscribe((res) => {
      this.rooms = res;
    });

    this.apiService.getProfessors().subscribe((res) => {
      this.professors = res;
    });
  }
}
