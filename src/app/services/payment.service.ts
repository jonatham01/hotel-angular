import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

      apiUrl:string = "/payments";
      
      private handleError = (error: HttpErrorResponse) => {
        return throwError(() => new Error('Error' + error.message));
      };
    
    constructor(
        private httpClient:HttpClient
      ) { }
  
    create(dto:PaymentRequest): Observable<PaymentResponse> {
        return this.httpClient.post<PaymentResponse>(
          `${this.apiUrl}`, dto
        ).pipe(
          catchError(this.handleError)
        );
      }
    
      getOne(id: string): Observable<PaymentResponse> {
        return this.httpClient.get<PaymentResponse>(
          `${this.apiUrl}/id/${id}`
        ).pipe(
          catchError(this.handleError)
        );
      }
    
      getAll(): Observable<PaymentResponse[]> {
        return this.httpClient.get<PaymentResponse[]>(
          `${this.apiUrl}`
        ).pipe(
          catchError(this.handleError)
        );
      }
  
      update(id: string, dto:PaymentRequest): Observable<PaymentResponse> {
        return this.httpClient.put<PaymentResponse>(
          `${this.apiUrl}/update/${id}`, dto
        ).pipe(
          catchError(this.handleError)
        );
      }
    
      delete(id: string) {
        this.httpClient.delete<void>(
          `${this.apiUrl}/delete/${id}`
        ).pipe(
          catchError(this.handleError)
        );
      }
}
