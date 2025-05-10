import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { DisponibilityRoom, RoomCategoryDisponibilityRoomPK } from '../models/disponibilityRoom.model';

@Injectable({
  providedIn: 'root'
})
export class DisponibilityRoomService {

  apiUrl:string = "/api/rcdr";
    
    private handleError = (error: HttpErrorResponse) => {
      return throwError(() => new Error('Error' + error.message));
    };
  
  constructor(
      private httpClient:HttpClient
    ) { }

  create(dto: DisponibilityRoom): Observable<DisponibilityRoom> {
    return this.httpClient.post<DisponibilityRoom>(
      `${this.apiUrl}`,dto
  ).pipe(
    catchError(this.handleError)
  );
}
  
    getOne(id: RoomCategoryDisponibilityRoomPK): Observable<DisponibilityRoom> {
      return this.httpClient.get<DisponibilityRoom>(
        `${this.apiUrl}/id/${id.roomId}/${id.roomCategoryDisponibilityId}`
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    getAll(): Observable<DisponibilityRoom[]> {
      return this.httpClient.get<DisponibilityRoom[]>(
        `${this.apiUrl}`
      ).pipe(
        catchError(this.handleError)
      );
    }
    getAllByRoom(id: number, date: Date) {
      return this.httpClient.get<DisponibilityRoom[]>(
        `${this.apiUrl}/filter/${id}`
      ).pipe(
        catchError(this.handleError)
      );
    }
    
}
