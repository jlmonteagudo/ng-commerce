import { Observable } from 'rxjs/Observable';
import { ProductService } from './../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<any>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getListProducts();
  }

}
