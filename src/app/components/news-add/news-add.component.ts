import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
})
export class NewsAddComponent implements OnInit {
  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  addNewsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  get controls() {
    return this.addNewsForm.controls;
  }

  addNews(data: any) {
    this.apiService.addNews(data).subscribe(
      (res) => {
        this.router.navigate(['/']);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
