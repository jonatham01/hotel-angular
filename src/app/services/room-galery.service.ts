import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RoomCategoryGallery, RoomCategoryGalleryRequestDTO } from '../models/roomCategoryGallery.model';

@Injectable({
  providedIn: 'root'
})
export class RoomGaleryService {


  apiUrl:string = "/api/gallery";
    
    private handleError = (error: HttpErrorResponse) => {
      return throwError(() => new Error('Error' + error.message));
    };
  
  constructor(
      private httpClient:HttpClient
    ) { }

  create(dto: RoomCategoryGalleryRequestDTO): Observable<RoomCategoryGallery> {
    const formData = new FormData();
    if(dto.image != null){
          formData.append('image', dto.image);
    }   
    const params = new HttpParams()
      .set('description', dto.description)
      .set('tittle',dto.tittle)
      .set("categoryId",dto.categoryId);   

    return this.httpClient.post<RoomCategoryGallery>(
      `${this.apiUrl}/upload`,
      formData, 
      {params}
  ).pipe(
    catchError(this.handleError)
  );
}
  
    getOne(id: bigint): Observable<RoomCategoryGallery> {
      return this.httpClient.get<RoomCategoryGallery>(
        `${this.apiUrl}/id/${id}`
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    getAll(): Observable<RoomCategoryGallery[]> {
      return this.httpClient.get<RoomCategoryGallery[]>(
        `${this.apiUrl}`
      ).pipe(
        catchError(this.handleError)
      );
    }

    update(id: bigint, dto: RoomCategoryGalleryRequestDTO, file: File): Observable<RoomCategoryGallery> {
      const formData = new FormData();
        
        const params = new HttpParams()
          .set('description', dto.description)
          .set('tittle',dto.tittle)
          .set("categoryId",dto.categoryId);
          if(dto.image != null){
          formData.append('image', dto.image);
        }  

        return this.httpClient.put<RoomCategoryGallery>(
          `${this.apiUrl}/update/${id}`,
          formData, 
          {params}
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
