import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';

@Component({
  selector: 'app-internal-room',
  templateUrl: './internal-room.component.html',
})
export class InternalRoomComponent {
  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {}

  roomForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  get controls() {
    return this.roomForm.controls;
  }

  newRoom(data: { name: string; description: string }) {
    this.apiService.addRoom(data).subscribe((res) => {
      if (res) {
        this.router.navigate(['/internal']);
      }
    });
  }
}
