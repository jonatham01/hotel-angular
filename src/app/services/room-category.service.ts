import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RoomCategoryRequestDTO, RoomCategoryResponseDTO } from '../models/roomCategory.model';

@Injectable({
  providedIn: 'root'
})
export class RoomCategoryService {


  apiUrl:string = "http://localhost:8090/room-categories";
    
    private handleError = (error: HttpErrorResponse) => {
      return throwError(() => new Error('Error' + error.message));
    };
  
  constructor(
      private httpClient:HttpClient
    ) { }

  create(dto:RoomCategoryRequestDTO): Observable<RoomCategoryResponseDTO> {
    console.log("creando")
      return this.httpClient.post<RoomCategoryResponseDTO>(
        `${this.apiUrl}`, dto
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    getOne(id: number): Observable<RoomCategoryResponseDTO> {
      return this.httpClient.get<RoomCategoryResponseDTO>(
        `${this.apiUrl}/id/${id}`
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    getAll(): Observable<RoomCategoryResponseDTO[]> {
      return this.httpClient.get<RoomCategoryResponseDTO[]>(
        `${this.apiUrl}`
      ).pipe(
        catchError(this.handleError)
      );
    }

    getFiltered(id: number,name:string,min:number,max:number): Observable<RoomCategoryResponseDTO[]> {
       const params = new HttpParams()
        .set('name', name)
        .set('min', min.toString())
        .set('max', max.toString())
        .set('hotelId', id.toString());
      return this.httpClient.get<RoomCategoryResponseDTO[]>(
        `${this.apiUrl}/filter`, {params}
      ).pipe(
        catchError(this.handleError)
      );
    }

    getAvailables(date: Date): Observable<RoomCategoryResponseDTO[]> {
      const formattedDate = date.toISOString().split('T')[0]; // "yyyy-MM-dd"
      

      return this.httpClient.get<RoomCategoryResponseDTO[]>(
        `${this.apiUrl}/available/${date.getFullYear}/${date.getMonth}/${date.getDate}`
      ).pipe(
        catchError(this.handleError)
      );
    }

  
    update(id: number, dto:RoomCategoryRequestDTO): Observable<RoomCategoryResponseDTO> {
      return this.httpClient.put<RoomCategoryResponseDTO>(
        `${this.apiUrl}/update/${id}`, dto
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    delete(id: number) {
      return this.httpClient.delete<string>(
        `${this.apiUrl}/delete/${id}`
      ).pipe(
        catchError(this.handleError)
      );
    }


}
