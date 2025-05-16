import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ReservationRequestDTO, ReservationResponseDTO } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  apiUrl:string = "http://localhost:8090/api/payment-transactions";
        
  private handleError = (error: HttpErrorResponse) => {
    return throwError(() => new Error('Error' + error.message));
  };
      
  constructor( private httpClient:HttpClient) { }
    
      create(dto:ReservationRequestDTO): Observable<ReservationResponseDTO> {
          return this.httpClient.post<ReservationResponseDTO>(
            `${this.apiUrl}`, dto
          ).pipe(
            catchError(this.handleError)
          );
        }
      
        getOne(id: bigint): Observable<ReservationResponseDTO> {
          return this.httpClient.get<ReservationResponseDTO>(
            `${this.apiUrl}/id/${id}`
          ).pipe(
            catchError(this.handleError)
          );
        }
      
        getAll(): Observable<ReservationResponseDTO[]> {
          return this.httpClient.get<ReservationResponseDTO[]>(
            `${this.apiUrl}/all`
          ).pipe(
            catchError(this.handleError)
          );
        }
    
        update(id: bigint, dto:ReservationRequestDTO): Observable<ReservationResponseDTO> {
          return this.httpClient.put<ReservationResponseDTO>(
            `${this.apiUrl}/update/${id}`, dto
          ).pipe(
            catchError(this.handleError)
          );
        }
      
        delete(id: bigint) {
          this.httpClient.delete<void>(
            `${this.apiUrl}/delete/${id}`
          ).pipe(
            catchError(this.handleError)
          );
        }
}
