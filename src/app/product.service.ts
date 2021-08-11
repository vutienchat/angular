import { data } from './../../../my-app/src/app/mock-products';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './home/product';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  api = 'http://localhost:4000/api/products';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get<any>(this.api);
  }
  removeProduct(id: any): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`);
  }
  getDetail(id: string): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  createProduct(data: any): Observable<any> {
    const fd = new FormData();
    fd.append('name', data.name);
    fd.append('price', data.price);
    fd.append('description', data.description);
    fd.append('quantity', data.quantity);
    fd.append('category', data.category);
    data.photo ? fd.append('photo', data.photo) : '';
    return this.http.post<any>(this.api, fd);
  }
  editProduct(id: any, product: any): Observable<any> {
    const fd = new FormData();
    fd.append('name', product.name);
    fd.append('price', product.price);
    fd.append('description', product.description);
    fd.append('category', product.category);
    fd.append('quantity', product.quantity);
    product.photo ? fd.append('photo', product.photo) : '';
    return this.http.put<any>(`${this.api}/${id}`, fd);
  }
}
