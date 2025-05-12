import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './admin/user/user.component';
import { ReservationsComponent } from './admin/reservations/reservations.component';
import { RoomsComponent } from './admin/rooms/rooms.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/admin/user',
    pathMatch:'full'
  },
  {
    path:'user',
    component:UserComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
