import { ProductService } from './../../services/product/product.service';
import { Observable } from 'rxjs/Observable';
import { Product} from './../../services/product/product';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  product$: Observable<Product>;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.product$ = this.route.params
      .switchMap((params: any) => this.productService.getProduct(params.id));
  }

}

