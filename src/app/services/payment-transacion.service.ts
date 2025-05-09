import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PaymentTransactionRequestDTO, PaymentTransactionResponseDTO } from '../models/paymentTransaction.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTransacionService {

  apiUrl:string = "//api/payment-transactions";
        
        private handleError = (error: HttpErrorResponse) => {
          return throwError(() => new Error('Error' + error.message));
        };
      
      constructor(
          private httpClient:HttpClient
        ) { }
    
      create(dto:PaymentTransactionRequestDTO): Observable<PaymentTransactionResponseDTO> {
          return this.httpClient.post<PaymentTransactionResponseDTO>(
            `${this.apiUrl}`, dto
          ).pipe(
            catchError(this.handleError)
          );
        }
      
        getOne(id: number): Observable<PaymentTransactionResponseDTO> {
          return this.httpClient.get<PaymentTransactionResponseDTO>(
            `${this.apiUrl}/id/${id}`
          ).pipe(
            catchError(this.handleError)
          );
        }
      
        getAll(): Observable<PaymentTransactionResponseDTO[]> {
          return this.httpClient.get<PaymentTransactionResponseDTO[]>(
            `${this.apiUrl}/all`
          ).pipe(
            catchError(this.handleError)
          );
        }
    
        update(id: string, dto:PaymentTransactionRequestDTO): Observable<PaymentTransactionResponseDTO> {
          return this.httpClient.put<PaymentTransactionResponseDTO>(
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
