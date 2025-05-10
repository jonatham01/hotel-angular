import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RoomRequest, RoomResponse } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {


  apiUrl:string = "/room";
    
    private handleError = (error: HttpErrorResponse) => {
      return throwError(() => new Error('Error' + error.message));
    };
  
  constructor(
      private httpClient:HttpClient
    ) { }

  create(dto: RoomRequest): Observable<RoomResponse> {
    return this.httpClient.post<RoomResponse>(
      `${this.apiUrl}/upload`,dto
  ).pipe(
    catchError(this.handleError)
  );
}
  
    getOne(id: number): Observable<RoomResponse> {
      return this.httpClient.get<RoomResponse>(
        `${this.apiUrl}/id/${id}`
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    getAll(): Observable<RoomResponse[]> {
      return this.httpClient.get<RoomResponse[]>(
        `${this.apiUrl}`
      ).pipe(
        catchError(this.handleError)
      );
    }

    update(id: number, dto: RoomRequest): Observable<RoomResponse> {
        return this.httpClient.put<RoomResponse>(
          `${this.apiUrl}/update/${id}`,
          dto
      ).pipe(
        catchError(this.handleError)
      );
    }

  
    delete(id: number) {
      this.httpClient.delete<void>(
        `${this.apiUrl}/delete/${id}`
      ).pipe(
        catchError(this.handleError)
      );
    }
    
}
