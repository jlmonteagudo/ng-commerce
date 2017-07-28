import { ProductService } from './../../services/product/product.service';
import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';



describe('ProductListComponent', () => {
  //let productService: ProductService;
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {

    /*
    let productServiceStub = {
      getListProducts: [
        {
          id: 794,
          name: 'Premium Quality'
        }
      ]
    };
    */

    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      //providers:    [ {provide: ProductService, useValue: productServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //productService = TestBed.get(ProductService);

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
