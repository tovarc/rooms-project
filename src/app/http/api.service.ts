import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
    },
  };

  register(data: any) {
    return this.http.post<any>(`${environment.api}/users`, data);
  }

  login(data: any) {
    return this.http.post<any>(`${environment.api}/auth/login`, data);
  }

  profile() {
    return this.http.get<any>(
      `${environment.api}/auth/profile`,
      this.httpOptions
    );
  }

  // News API

  getNews() {
    return this.http.get<any>(`${environment.api}/news`);
  }

  getNewsById(id: string) {
    return this.http.get<any>(`${environment.api}/news/${id}`);
  }

  addNews(data: any) {
    return this.http.post<any>(
      `${environment.api}/news`,
      data,
      this.httpOptions
    );
  }

  // Rooms API

  getRooms() {
    return this.http.get<any>(`${environment.api}/rooms`);
  }

  addRoom(data: any) {
    return this.http.post<any>(
      `${environment.api}/rooms`,
      data,
      this.httpOptions
    );
  }

  bookRoom(data: any) {
    return this.http.put<any>(
      `${environment.api}/rooms/book`,
      data,
      this.httpOptions
    );
  }

  // Professors API

  getProfessors() {
    return this.http.get<any>(`${environment.api}/professors`);
  }

  addProfessor(data: any) {
    return this.http.post<any>(
      `${environment.api}/professors`,
      data,
      this.httpOptions
    );
  }
}
