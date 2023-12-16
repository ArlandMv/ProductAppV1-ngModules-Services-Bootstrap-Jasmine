import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  id: number;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.readProduct();
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

  updateProduct() {
    this.product.lastModified = undefined;
    console.log('product2update:', this.product);
    this.productService.updateProduct(this.id, this.product).subscribe({
      next: (data) => {
        console.log('Product updated successfully:', data);
        this.showSuccessAlert();
      },
      error: (error) => {
        console.error('Error updating product:', error);
        this.showErrorAlert();
      },
    });
  }

  private showSuccessAlert(): void {
    Swal.fire({
      title: 'Success!',
      text: 'Product updated successfully',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  }

  private showErrorAlert(): void {
    Swal.fire({
      title: 'Error!',
      text: 'Failed to update product',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
}
