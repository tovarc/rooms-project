import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';

@Component({
  selector: 'app-internal-professor',
  templateUrl: './internal-professor.component.html',
})
export class InternalProfessorComponent implements OnInit {
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

  professorForm = new FormGroup({
    name: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    roomId: new FormControl('', Validators.required),
  });

  get controls() {
    return this.professorForm.controls;
  }

  newProfessor(data: any) {
    this.apiService.addProfessor(data).subscribe((res) => {
      if (res) {
        this.router.navigate(['/internal']);
      }
    });
  }
}
