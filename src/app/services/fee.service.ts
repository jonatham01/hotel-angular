import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { FeeRequestDTO, FeeResponseDTO } from '../models/fee.model';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  apiUrl:string = "/fees";
    
    private handleError = (error: HttpErrorResponse) => {
      return throwError(() => new Error('Error' + error.message));
    };
  
  constructor(
      private httpClient:HttpClient
    ) { }

  create(dto:FeeRequestDTO): Observable<FeeResponseDTO> {
      return this.httpClient.post<FeeResponseDTO>(
        `${this.apiUrl}`, dto
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    getOne(id: bigint): Observable<FeeResponseDTO> {
      const params = new HttpParams().set('id', id.toString());
      return this.httpClient.get<FeeResponseDTO>(
        `${this.apiUrl}`, {params}
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    getAll(): Observable<FeeResponseDTO[]> {
      return this.httpClient.get<FeeResponseDTO[]>(
        `${this.apiUrl}`
      ).pipe(
        catchError(this.handleError)
      );
    }

    getAllByCategory(id: bigint): Observable<FeeResponseDTO[]> {
      const params = new HttpParams().set('id', id.toString());
      return this.httpClient.get<FeeResponseDTO[]>(
        `${this.apiUrl}/category`, {params}
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    update(id: bigint, dto:FeeRequestDTO): Observable<FeeResponseDTO> {
      return this.httpClient.put<FeeResponseDTO>(
        `${this.apiUrl}/${id}`, dto
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    delete(id: bigint) {
      this.httpClient.delete<void>(
        `${this.apiUrl}/${id}`
      ).pipe(
        catchError(this.handleError)
      );
    }
    
}
