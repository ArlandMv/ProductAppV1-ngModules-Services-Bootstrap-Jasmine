import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './nav.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProductListComponent } from '../product-list/product-list.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  let router: Router;
  let location: Location;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          { path: 'products', component: ProductListComponent },
        ]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should navigate to / when Home link is clicked', waitForAsync(() => {
    const homeLink = fixture.nativeElement.querySelector('a[href="/"]');
    homeLink.click();

    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/');
    });
  }));

  it('should navigate to /about when About link is clicked', waitForAsync(() => {
    const aboutLink = fixture.nativeElement.querySelector('a[href="/about"]');
    aboutLink.click();

    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/about');
    });
  }));

  it('should navigate to /products when Products link is clicked', waitForAsync(() => {
    const productsLink = fixture.nativeElement.querySelector(
      'a[href="/products"]'
    );
    productsLink.click();

    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/products');
    });
  }));
});
