import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/http/api.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
})
export class NewsSingleComponent implements OnInit {
  constructor(
    private readonly apiService: ApiService,
    private readonly route: ActivatedRoute
  ) {}

  news!: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.apiService.getNewsById(params.id).subscribe((res) => {
        this.news = res;
      });
    });
  }
}
