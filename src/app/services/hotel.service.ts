import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelRequestDTO, HotelResponseDTO } from '../models/hotel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  apiUrl:String = "http://localhost:8090/hotel";

  constructor(
    private httpClient: HttpClient
  ) { }

  create(dto:HotelRequestDTO):Observable<HotelResponseDTO>{
    return this.httpClient.post<HotelResponseDTO>(
      `${this.apiUrl}/new`,dto
    )
  }
  
  update(dto:HotelRequestDTO, id:number):Observable<HotelResponseDTO>{
    return this.httpClient.put<HotelResponseDTO>(
      `${this.apiUrl}/update/${id}`,dto
    );
  }

  delete(id:number){
    return this.httpClient.delete<boolean>(
      `${this.apiUrl}/delete/${id}`
    );
  }

  getHotels():Observable<HotelResponseDTO[]>{
    return this.httpClient.get<HotelResponseDTO[]>(
      `${this.apiUrl}/show/all`
    );
  }

  getHotelById(id:number){
    return this.httpClient.get<HotelResponseDTO>(
       `${this.apiUrl}/find/${id}`
    );
  }

  getHotelByAttributes(name:string,country:string|null, city:string|null, state:string|null ){
    let params = new HttpParams()
    .set('name', name);

    if (country) {
      params = params.set('country', country);
    }
    if (city) {
      params = params.set('city', city);
    }
    if (state) {
      params = params.set('state', state);
    }

    return this.httpClient.get<HotelResponseDTO>(
      `${this.apiUrl}/find/attributes`,
      { params }
    );
  }


}
