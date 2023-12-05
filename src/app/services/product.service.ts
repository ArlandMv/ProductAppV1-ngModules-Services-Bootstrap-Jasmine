import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'http://localhost:8080/api/v1/products;';
  private cloudURL = 'http://localhost:8080/api/v1/products;';

  constructor() {} //private http: HttpClient

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      lastModified: new Date('2023-01-01'),
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      lastModified: new Date(),
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
    //return this.httpClient.get<Product[]>(this.baseURL);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find((product) => product.id === id));
    //return this.httpClient.get<Product[]>(this.baseURL);
  }

  addProduct(product: Product): void {
    if (!product.lastModified) {
      product.lastModified = new Date();
    }
    this.products.push(product);
    //return this.httpClient.post<Product>(this.baseURL, product);
  }
}
