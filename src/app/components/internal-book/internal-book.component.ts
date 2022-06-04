import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';

@Component({
  selector: 'app-internal-book',
  templateUrl: './internal-book.component.html',
})
export class InternalBookComponent implements OnInit {
  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {}

  rooms: any = [];

  ngOnInit(): void {
    this.apiService.getRooms().subscribe((res) => {
      this.rooms = res;
    });
  }

  bookRoomForm = new FormGroup({
    id: new FormControl('', Validators.required),
    booked_from: new FormControl(Date, Validators.required),
    booked_to: new FormControl(Date, Validators.required),
  });

  get controls() {
    return this.bookRoomForm.controls;
  }

  bookRoom(data: any) {
    data.booked_from = new Date(data.booked_from);
    data.booked_to = new Date(data.booked_to);
    this.apiService.bookRoom(data).subscribe((res) => {
      this.router.navigate(['/internal']);
    });
  }
}
