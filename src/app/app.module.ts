import { ProductItemComponent } from './product/product-item/product-item.component';
import { AuthInterceptor } from './services/interceptors/AuthInterceptor';
import { APP_CONFIG_SERVICE, DATA_APP_CONFIG } from './config/app.config.service';
import { ProductService } from './services/product/product.service';
import { CategoryService } from './services/category/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { ProductShowComponent } from './product/product-show/product-show.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products/:id', component: ProductShowComponent },
  { path: 'products', component: ProductListComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ProductListComponent,
    ProductItemComponent,
    HomeComponent,
    ProductShowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ 
    { provide: APP_CONFIG_SERVICE, useValue: DATA_APP_CONFIG },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ProductService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
