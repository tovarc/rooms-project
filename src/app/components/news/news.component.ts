import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/http/api.service';
import { LoginService } from 'src/app/http/login.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  constructor(
    private readonly apiService: ApiService,
    public readonly loginService: LoginService
  ) {}

  news: any = [];

  ngOnInit(): void {
    this.apiService.getNews().subscribe((res) => {
      this.news = res;
    });
  }
}
