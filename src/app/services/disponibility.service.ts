import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Disponibility } from '../models/disponibility.model';

@Injectable({
  providedIn: 'root'
})
export class DisponibilityService {

  apiUrl:string = "/disponibilities";
    
    private handleError = (error: HttpErrorResponse) => {
      return throwError(() => new Error('Error' + error.message));
    };
  
  constructor(
      private httpClient:HttpClient
    ) { }

  create(dto: Disponibility): Observable<Disponibility> {
    return this.httpClient.post<Disponibility>(
      `${this.apiUrl}`,dto
  ).pipe(
    catchError(this.handleError)
  );
}
  
    getOne(id: bigint): Observable<Disponibility> {
      return this.httpClient.get<Disponibility>(
        `${this.apiUrl}/id/${id}`
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    getAll(): Observable<Disponibility[]> {
      return this.httpClient.get<Disponibility[]>(
        `${this.apiUrl}`
      ).pipe(
        catchError(this.handleError)
      );
    }
    getAllByRoomCategory(id: number, date: Date) {
      const formattedDate = date.toISOString().split('T')[0]; // 'yyyy-MM-dd'
      return this.httpClient.get<Disponibility[]>(
        `${this.apiUrl}/filter/${id}/${formattedDate}`
      ).pipe(
        catchError(this.handleError)
      );
    }

    /*update(id: bigint, dto: Disponibility): Observable<Disponibility> {
        return this.httpClient.put<Disponibility>(
          `${this.apiUrl}/update/${id}`,
          dto
      ).pipe(
        catchError(this.handleError)
      );
    }
*/
  
    
}
