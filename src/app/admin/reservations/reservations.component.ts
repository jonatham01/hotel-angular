import { Component } from '@angular/core';
import { ReservationRequestDTO, ReservationResponseDTO } from 'src/app/models/reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {

  reservations:ReservationResponseDTO[] = [];
  filtered:ReservationResponseDTO[] = [];
  idPayment: string = '';

  constructor(
    private service: ReservationService
  ){}
  
  ngOnInit(){
    this.service.getAll().subscribe( data => {
       this.reservations = data; 
       this.filtered=data;
    });
  }

  filter(){
    this.filtered = this.reservations.filter(data=>  {
        if(this.idPayment.trim() !==''){ return data.reservationPaymentId = this.idPayment}
        else {return true}
    });
  }

  emptyForm(){
    this.idPayment = '';
    this.filtered = this.reservations;
  }
}
