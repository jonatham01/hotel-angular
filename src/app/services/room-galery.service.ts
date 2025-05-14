import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { RoomCategoryGallery, RoomCategoryGalleryRequestDTO } from '../models/roomCategoryGallery.model';

@Injectable({
  providedIn: 'root'
})
export class RoomGaleryService {


  apiUrl:string = "http://localhost:8090/api/gallery";
    
    private handleError = (error: HttpErrorResponse) => {
      return throwError(() => new Error('Error' + error.message));
    };
  
  constructor(
      private httpClient:HttpClient
    ) { }

  create(dto: RoomCategoryGalleryRequestDTO,file:File): Observable<RoomCategoryGallery> {
    
    if(dto.categoryId==null) { dto.categoryId=1;}

    const formData = new FormData();
    if(file != null){
          formData.append('image', file);
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
        `${this.apiUrl}/id/${Number(id)}`
      ).pipe(
        catchError(this.handleError)
      );
    }
  
    getAll(id:number): Observable<RoomCategoryGallery[]> {
      return this.httpClient.get<RoomCategoryGallery[]>(
        `${this.apiUrl}/${id}`
      ).pipe(
        catchError(this.handleError)
      );
    }

    update(id: bigint, dto: RoomCategoryGalleryRequestDTO, file: File): Observable<RoomCategoryGallery> {
        const formData = new FormData();

        if(dto.categoryId==null) { dto.categoryId=1;}
        
        const params = new HttpParams()
          .set('description', dto.description)
          .set('tittle',dto.tittle)
          .set("categoryId",dto.categoryId);

        if(file != null){
          formData.append('image', file);
        }  

        return this.httpClient.put<RoomCategoryGallery>(
          `${this.apiUrl}/update/${id}`,
          formData, 
          {params}
      ).pipe(
        catchError(this.handleError)
      );
    }

  
    delete(id: number) {
      return this.httpClient.delete<void>(
        `${this.apiUrl}/delete/${id}`
      ).pipe(
        catchError(this.handleError)
      );
    }

}
