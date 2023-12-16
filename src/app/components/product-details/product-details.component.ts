import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = new Product();
    this.readProduct();
  }

  goBack() {
    this.router.navigate(['/products']);
  }

  readProduct() {
    this.productService.getProductById(this.id).subscribe({
      next: (data) => {
        this.product = data!;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
