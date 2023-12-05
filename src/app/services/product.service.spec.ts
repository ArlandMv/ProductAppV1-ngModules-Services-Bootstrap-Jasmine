import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of products', (done: DoneFn) => {
    service.getProducts().subscribe((products) => {
      expect(products.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should return a product by id', (done: DoneFn) => {
    const productId = 1;
    service.getProductById(productId).subscribe((product) => {
      expect(product?.id).toBe(productId);
      done();
    });
  });

  it('should add a new product', (done: DoneFn) => {
    const newProduct = { id: 3, name: 'New Product', price: 49.99 };
    const initialLength = service.getProducts().subscribe((products) => {
      const initialLength = products.length;

      service.addProduct(newProduct);

      service.getProducts().subscribe((updatedProducts) => {
        expect(updatedProducts.length).toBe(initialLength + 1);
        done();
      });
    });
  });
});
