import { Category } from './category';
import { AppConfig } from './../../config/app.config';
import { APP_CONFIG_SERVICE } from './../../config/app.config.service';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class CategoryService {

  private URL_CATEGORIES: string;
  private ENTITY_NAME: string = 'products/categories';

  constructor(@Inject(APP_CONFIG_SERVICE) private config: AppConfig, private http: HttpClient) {
    this.URL_CATEGORIES = config.apiEndpoint + this.ENTITY_NAME;
  }

  getListBaseCategories(): Observable<Category[]> {
    return this.http.get(`${this.URL_CATEGORIES}?parent=0`).map(Category.fromJsonArray);
  }

}
