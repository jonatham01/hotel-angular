import { Component } from '@angular/core';
import { HotelRequestDTO, HotelResponseDTO } from 'src/app/models/hotel.model';
import { HotelPhoneRequestDTO, HotelPhoneResponseDTO } from 'src/app/models/hotelPhone.model';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  hotels: HotelResponseDTO[] = [];
  hotelDTO: HotelRequestDTO = {
    name : '',
    address: '',
    email: '',
    city: '',
    state: '',
    country: ''

  };
  hotelError:any= {
    name: false,
    address: false,
    email: false,
    city: false,
    state: false,
    country: false,
    id:false
  };
  hotelId:number | null = null;

  phones: HotelPhoneResponseDTO[]= [];
  //phoneDto: HotelPhoneRequestDTO = {};

  constructor(
    private hotelService:HotelService,
    //private phoneService: PhoneService,
  ){}

  ngOnInit():void{
    this.hotelService.getHotels().subscribe( data => { 
      if(data){this.hotels = data;}

    });
  }

  validate(){
      this.hotelError.name = (this.hotelDTO.name?.trim() === '');
      this.hotelError.address = (this.hotelDTO.address?.trim() === '');
      this.hotelError.email = (this.hotelDTO.email?.trim() === '');
      this.hotelError.city = (this.hotelDTO.city?.trim() === '');
      this.hotelError.state = (this.hotelDTO.state?.trim() === '');
      this.hotelError.country = (this.hotelDTO.country?.trim() === '');
  }

  create(){
    this.validate();
    const hasError = Object.values(this.hotelError).some(error => error);
    if (hasError) {
      return; // No enviar al backend si hay errores de validación
    }

    this.hotelService.create(this.hotelDTO).subscribe( data => {
      this.hotels.push(data);
    });
  }
  update(){
    this.validate();
    const hasError = Object.values(this.hotelError).some(error => error);
    if (hasError) {
      return; // No enviar al backend si hay errores de validación
    }
    if(this.hotelId !=null){
      this.hotelService.update(this.hotelDTO,this.hotelId).subscribe( data => {
        const index = this.hotels.findIndex(h => h.id === this.hotelId);
        if (index !== -1) {
          this.hotels[index] = data;
        }
      });
    }
    
  }

}
