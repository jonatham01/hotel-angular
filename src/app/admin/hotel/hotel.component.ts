import { Component } from '@angular/core';
import { HotelRequestDTO, HotelResponseDTO } from 'src/app/models/hotel.model';
import { HotelPhoneRequestDTO, HotelPhoneResponseDTO } from 'src/app/models/hotelPhone.model';
import { HotelService } from 'src/app/services/hotel.service';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  //hotels: HotelResponseDTO[] = [];
  message:string = '';
  mesaggeValid= this.message.trim() !== '';

  hotelDTO: HotelRequestDTO = {
    name : '',
    address: '',
    city: '',
    state: '',
    country: ''

  };
  hotelError:any= {
    name: false,
    address: false,
    city: false,
    state: false,
    country: false,
    id:false
  };
  hotelId:number | null = 1;

  phones: HotelPhoneResponseDTO[]= [];
  phoneDto: HotelPhoneRequestDTO = {
    number:'',
    hotelId: 1
  };
  phoneId: string | null = null;
  


  constructor(
    private hotelService:HotelService,
    private phoneService: PhoneService,
  ){}

  ngOnInit():void{
    this.hotelService.getHotels().subscribe( data => { 
      
      if(data){
        this.hotelDTO = data[0];
        //this.hotels = data;
      }
    });
    this.phoneService.getAll().subscribe( data => { 
      if(data){this.phones = data;}
    });
  }
  

  validate(){
      this.hotelError.name = (this.hotelDTO.name?.trim() === '');
      this.hotelError.address = (this.hotelDTO.address?.trim() === '');
      this.hotelError.city = (this.hotelDTO.city?.trim() === '');
      this.hotelError.state = (this.hotelDTO.state?.trim() === '');
      this.hotelError.country = (this.hotelDTO.country?.trim() === '');
  }

  createHotel(){
    this.validate();
    const hasError = Object.values(this.hotelError).some(error => error);
    if (hasError) {
      return; // No enviar al backend si hay errores de validación
    }

    this.hotelService.create(this.hotelDTO).subscribe( data => {
      //this.hotels.push(data);
    });

  }
  updateHotel(){
    this.validate();
    const hasError = Object.values(this.hotelError).some(error => error);
    if (hasError) {
      return; // No enviar al backend si hay errores de validación
    }
    if(this.hotelId !=null){
      this.hotelService.update(this.hotelDTO,this.hotelId).subscribe(data=>{
        if(data){ 
          this.message = "La información del hotel a sido actualizada";
          this.mesaggeValid= true;
        }
      } );
    }

  }

  existsNumber(number: string): boolean {
    return this.phones.some(phone => phone.hotelNumber === number);
  }

  numberError():boolean{
    return this.phoneDto.number.trim() == ''
  };
  updateError():boolean{
    return this.phoneDto.number.trim() == '' && this.phoneId == null;
  }

  createPhone(){
    console.log(this.existsNumber(this.phoneDto.number))
    console.log(this.numberError())
    console.log(this.phoneDto.number)
    if(!this.numberError() && !this.existsNumber(this.phoneDto.number)){
      this.phoneService.create(this.phoneDto).subscribe(data=>{
        this.phones.push(data);
      });
    }
    if(this.existsNumber(this.phoneDto.number)){
     
      this.message = "Número telefonico ya existe. No puede guardarse";
      this.mesaggeValid= true;
    }
  }
  updateForm(number:string, id:number){
    this.phoneDto.number = number;
    this.phoneId = number;
  }
  updatePhone(){
    if(this.phoneDto.number.trim() != '' && this.phoneId != null && !this.existsNumber(this.phoneDto.number)){
      this.phoneService.update(this.phoneDto,this.phoneId).subscribe(updatedPhone => {
          const index = this.phones.findIndex(p => p.hotelNumber === this.phoneId);
          if (index !== -1) {
            this.phones[index] = updatedPhone;
          }

          if(updatedPhone){ 
          this.message = "Número telefonico actualizado";
          this.mesaggeValid= true;
          }

          // Limpia campos después de actualizar
          this.phoneDto = {
            number: '',
            hotelId: 1
          };
          this.phoneId = null;
        });
    }
    if(this.existsNumber(this.phoneDto.number)){
      this.message = "Número telefonico ya existe. No puede guardarse";
      this.mesaggeValid= true;
    }
  }
  delete(number:string){
    this.phoneService.delete(number).subscribe();
     this.phones = this.phones.filter(phone => phone.hotelNumber !== number);
  }


}
