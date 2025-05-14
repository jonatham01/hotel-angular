import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesComponent } from './categories/categories.component';
import { PaymentsComponent } from './payments/payments.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HotelComponent } from './hotel/hotel.component';
import { AttributeComponent } from './attribute/attribute.component';
import { DisponibilityComponent } from './disponibility/disponibility.component';


@NgModule({
  declarations: [
    UserComponent,
    ReservationsComponent,
    RoomsComponent,
    CategoriesComponent,
    PaymentsComponent,
    GalleryComponent,
    HotelComponent,
    AttributeComponent,
    DisponibilityComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers:[
    {
      provide : HTTP_INTERCEPTORS, 
      useClass: TokenInterceptor, 
      multi: true
    }
  ]
})
export class AdminModule { }
