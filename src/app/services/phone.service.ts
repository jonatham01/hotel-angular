import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelPhoneRequestDTO, HotelPhoneResponseDTO } from '../models/hotelPhone.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  apiUrl:String = "http://localhost:8090/hotelphones";

  constructor(
    private httpClient: HttpClient
  ) { }

  create(dto:HotelPhoneRequestDTO){
    return this.httpClient.post<HotelPhoneResponseDTO>(
      `${this.apiUrl}`, dto
    );
  }

  getAll(){
    return this.httpClient.get<HotelPhoneResponseDTO[]>( `${this.apiUrl}`);
  }

  update(dto:HotelPhoneRequestDTO,number:string){
    return this.httpClient.put<HotelPhoneResponseDTO>(
      `${this.apiUrl}/${number}`, dto
    );
  }
  delete(number:string){
    return this.httpClient.delete<boolean>( `${this.apiUrl}`);
  }
}
