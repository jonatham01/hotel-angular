import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RoomsComponent } from './rooms/rooms.component';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
