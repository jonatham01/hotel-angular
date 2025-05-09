import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpContextToken,
  HttpContext
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { TokenService } from './../services/token.service';

/*

    Cada vez que enviemos una peticion (get post put)
    Permite enviar el token (obtenido en la sesion)
    en el header (Autorization)
  
*/

const ADD_TOKEN = new HttpContextToken<boolean>(() => true);

export function checkTime() {
  return new HttpContext().set(ADD_TOKEN, false);
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.context.get(ADD_TOKEN)) {
      request = this.addToken(request);
      return next.handle(request);
  } 
    else{
      return next.handle(request);
  }
   // request = this.addToken(request);
   // return next.handle(request);
  }

  //Esta funcion envia token
  private addToken(request: HttpRequest<unknown>) {

    const token = this.tokenService.getToken();

    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': ['GET',' POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Content-Type": "application/json"
      });

      const authReq = request.clone({
        headers:headers
      });

      return authReq;
    }
    return request;
  }
  

}
