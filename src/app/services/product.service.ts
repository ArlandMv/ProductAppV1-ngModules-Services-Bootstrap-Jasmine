import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'http://localhost:8080/api';
  private version = 'v1';
  private resource = 'products';
  private url = 'http://localhost:8080/api/v1/products';

  constructor(private httpClient: HttpClient) {
    //this.url = `${this.baseURL}/${this.version}/${this.resource};`;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  /*
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
    */

  getProducts(): Observable<Product[]> {
    console.log(this.url);
    return this.httpClient.get<Product[]>(this.url);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.httpClient.get<Product>(this.baseURL);
  }

  addProduct(product: Product): Observable<Product> {
    if (!product.lastModified) {
      product.lastModified = new Date();
    }
    return this.httpClient.post<Product>(this.url, product);
  }

  //updateProduct Observable<Product>
  //deleteProduct Observable<void>
}
