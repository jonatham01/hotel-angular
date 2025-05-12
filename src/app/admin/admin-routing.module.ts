import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CategoriesComponent } from './categories/categories.component';
import { HotelComponent } from './hotel/hotel.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/admin/hotel',
    pathMatch:'full'
  },
  {
    path:'hotel',
    component:HotelComponent
  },
  {
    path:'category',
    component:CategoriesComponent
  },
  {
    path:'reservations',
    component:ReservationsComponent
  },
  {
    path:'rooms',
    component:RoomsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
