import { Product } from './product';
import { AppConfig } from './../../config/app.config';
import { APP_CONFIG_SERVICE } from './../../config/app.config.service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  private DEFAULT_MAX_PRODUCTS: number = 10;
  private URL_PRODUCTS: string;
  private ENTITY_NAME: string = 'products';

  constructor(@Inject(APP_CONFIG_SERVICE) private config: AppConfig, private http: HttpClient) {
    this.URL_PRODUCTS = config.apiEndpoint + this.ENTITY_NAME;
  }

  getListProducts(maxProducts = this.DEFAULT_MAX_PRODUCTS): Observable<Product[]> {
    return this.http.get(this.URL_PRODUCTS).map(Product.fromJsonArray);
  }

  getListProductsByCategory(categoryId?: number, maxProducts = this.DEFAULT_MAX_PRODUCTS): Observable<Product[]> {
    return this.http.get(`${this.URL_PRODUCTS}?category=${categoryId}&per_page=${maxProducts}`).map(Product.fromJsonArray);
  }
  
  getProduct(productId: number): Observable<Product> {
    return this.http.get(`${this.URL_PRODUCTS}/${productId}`).map(Product.fromJson);
  }
  
} 
