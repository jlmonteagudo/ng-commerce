import { AppConfig } from './../../config/app.config';
import { APP_CONFIG_SERVICE } from './../../config/app.config.service';
import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(@Inject(APP_CONFIG_SERVICE) private config: AppConfig) {}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({setHeaders: {Authorization: 'Basic ' + this.config.token}});
    return next.handle(authReq);
  }

}
