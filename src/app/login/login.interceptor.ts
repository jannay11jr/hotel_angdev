import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authCookieToken: string = this.cookieService.get('token');

    if (authCookieToken) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ` + authCookieToken
        }
      });
    }
    return next.handle(request);
  }
}
