import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  api = 'http://localhost:4000/api/';
  constructor(private http: HttpClient) {}
  getCategories(): Observable<any> {
    return this.http.get(`${this.api}categories`);
  }
  removeCategory(id: string): Observable<any> {
    return this.http.delete(`${this.api}category/${id}`);
  }
  getById(id: string): Observable<any> {
    return this.http.get(`${this.api}category/${id}`);
  }
  createCategory(category: any): Observable<any> {
    const fd = new FormData();
    fd.append('name', category.name);
    fd.append('photo', category.photo);
    return this.http.post(`${this.api}category`, fd);
  }
  updateCategory(category: any, id: string): Observable<any> {
    const fd = new FormData();
    fd.append('name', category.name);
    category.photo ? fd.append('photo', category.photo) : '';
    return this.http.put(`${this.api}category/${id}`, fd);
  }
}
