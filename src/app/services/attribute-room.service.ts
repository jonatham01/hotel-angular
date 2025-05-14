import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RoomAttributeRequestDTO, RoomAttributeResponseDTO } from '../models/roomAttribute.model';
import { AuthService } from './auth.service';
import { Token } from '@angular/compiler';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AttributeRoomService {

  apiUrl:string = "http://localhost:8090/room-attribute";
    
    private handleError = (error: HttpErrorResponse) => {
      return throwError(() => new Error('Error' + error.message));
    };
  
  constructor(
      private httpClient:HttpClient,
      private tokenservice: TokenService,
    ) { }

  create(dto: RoomAttributeRequestDTO, file: File): Observable<RoomAttributeResponseDTO> {
    const formData = new FormData();
    formData.append('data', new Blob([JSON.stringify(dto)], { type: 'application/json' })); // DTO


    formData.append('file', file);     // Parte llamada "file" (archivo)



    return this.httpClient.post<RoomAttributeResponseDTO>(
      `${this.apiUrl}/create`,
      formData
  ).pipe(
    catchError(this.handleError)
  );
}
  
    getOne(id: number): Observable<RoomAttributeResponseDTO> {
      const params = new HttpParams().set('id', id);
      return this.httpClient.get<RoomAttributeResponseDTO>(
        `${this.apiUrl}/id`, {params}
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    getAll(id:number): Observable<RoomAttributeResponseDTO[]> {
       const params = new HttpParams().set('roomCategoryId', id);
      return this.httpClient.get<RoomAttributeResponseDTO[]>(
        `${this.apiUrl}/by-category`,
         {params}
      ).pipe(
        catchError(this.handleError)
      );
    }

    update(id: number, dto: RoomAttributeRequestDTO, file: File): Observable<RoomAttributeResponseDTO> {
      const formData = new FormData();

      // Convertir el DTO en un Blob JSON
      const jsonBlob = new Blob([JSON.stringify(dto)], { type: 'application/json' });

      formData.append('data', jsonBlob); // parte "data"
      formData.append('file', file);     // parte "file"

      return this.httpClient.put<RoomAttributeResponseDTO>(
        `${this.apiUrl}/${id}`,
        formData
      ).pipe(
        catchError(this.handleError)
      );
    }

  
    delete(id: number) {
      this.httpClient.delete<void>(
        `${this.apiUrl}/delete/${id}`
      ).pipe(
        catchError(this.handleError)
      ).subscribe();
    }
    
}
