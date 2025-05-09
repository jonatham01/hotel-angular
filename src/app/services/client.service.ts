import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, ClientResponseDTO } from '../models/client.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl:string = "/api/clients";
  
  private handleError = (error: HttpErrorResponse) => {
    return throwError(() => new Error('Error' + error.message));
  };

  constructor(
    private httpClient:HttpClient
  ) { }

  create(client: Client): Observable<ClientResponseDTO> {
    return this.httpClient.post<ClientResponseDTO>(
      `${this.apiUrl}`, client
    ).pipe(
      catchError(this.handleError)
    );
  }

  getHotel(id: bigint): Observable<ClientResponseDTO> {
    return this.httpClient.get<ClientResponseDTO>(
      `${this.apiUrl}/${id}`
    ).pipe(
      catchError(this.handleError)
    );
  }

  getAll(): Observable<ClientResponseDTO> {
    return this.httpClient.get<ClientResponseDTO>(
      `${this.apiUrl}`
    ).pipe(
      catchError(this.handleError)
    );
  }

  update(id: bigint, client: Client): Observable<ClientResponseDTO> {
    return this.httpClient.put<ClientResponseDTO>(
      `${this.apiUrl}/${id}`, client
    ).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: bigint): Observable<boolean> {
    return this.httpClient.delete<boolean>(
      `${this.apiUrl}/${id}`
    ).pipe(
      catchError(this.handleError)
    );
  }

}
