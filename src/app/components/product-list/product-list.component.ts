import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.readProducts();
  }

  private readProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  public readProduct(id: number) {
    console.log('updateProduct' + id);
    this.router.navigate(['product-details', id]);
  }

  public updateProduct(id: number) {
    console.log('updateProduct' + id);
    this.router.navigate(['product-update', id]);
  }

  public deleteProduct(id: number) {
    console.log('deleteProduct ' + id);
    //build pop op saying are you sure??
    this.productService.deleteProduct(id).subscribe((data) => {
      this.readProducts();
    });
    console.log('Product deleted');
  }
}
