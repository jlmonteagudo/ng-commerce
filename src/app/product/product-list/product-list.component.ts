import { Category } from './../../services/category/category';
import { Observable } from 'rxjs/Observable';
import { ProductService } from './../../services/product/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../services/product/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() category: Category;
  @Input() maxProducts: number = 10;
  products$: Observable<any>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    if (this.category) {
      this.products$ = this.productService.getListProductsByCategory(this.category.id, this.maxProducts);
    }
    else {
      this.products$ = this.productService.getListProducts();
    }
  }

}
