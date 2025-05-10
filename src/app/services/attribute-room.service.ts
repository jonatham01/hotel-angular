import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RoomAttributeRequestDTO, RoomAttributeResponseDTO } from '../models/roomAttribute.model';

@Injectable({
  providedIn: 'root'
})
export class AttributeRoomService {

  apiUrl:string = "/fees";
    
    private handleError = (error: HttpErrorResponse) => {
      return throwError(() => new Error('Error' + error.message));
    };
  
  constructor(
      private httpClient:HttpClient
    ) { }

  create(dto: RoomAttributeRequestDTO, file: File): Observable<RoomAttributeResponseDTO> {
    const formData = new FormData();
    // Convertir el objeto DTO a JSON y empaquetarlo como un Blob
    const jsonBlob = new Blob([JSON.stringify(dto)], { type: 'application/json' });

    formData.append('data', jsonBlob); // Parte llamada "data" (JSON)
    formData.append('file', file);     // Parte llamada "file" (archivo)

    return this.httpClient.post<RoomAttributeResponseDTO>(
      `${this.apiUrl}/create`,
      formData
  ).pipe(
    catchError(this.handleError)
  );
}
  
    getHotel(id: number): Observable<RoomAttributeResponseDTO> {
      const params = new HttpParams().set('id', id);
      return this.httpClient.get<RoomAttributeResponseDTO>(
        `${this.apiUrl}/id`, {params}
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    getAll(): Observable<RoomAttributeResponseDTO[]> {
      return this.httpClient.get<RoomAttributeResponseDTO[]>(
        `${this.apiUrl}`
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

  
    delete(id: bigint) {
      this.httpClient.delete<void>(
        `${this.apiUrl}/delete/${id}`
      ).pipe(
        catchError(this.handleError)
      );
    }
    
}
