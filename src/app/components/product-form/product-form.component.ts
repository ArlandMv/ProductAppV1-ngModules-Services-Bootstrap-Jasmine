import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  validatePrice(control: any) {
    const price = control.value;
    if (price < 0) {
      return { negative: true };
    }
    return null;
  }

  onSubmit() {
    console.log('form:', this.product);
    this.registerProduct();
  }

  registerProduct() {
    this.productService.addProduct(this.product).subscribe(
      (obj) => {
        console.log(obj);
        this.navigateToList();
      },
      (error) => console.log(error)
    );
  }

  navigateToList() {
    this.router.navigate(['/products']);
  }
}
