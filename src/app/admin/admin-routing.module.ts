import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CategoriesComponent } from './categories/categories.component';
import { HotelComponent } from './hotel/hotel.component';
import { AttributeComponent } from './attribute/attribute.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PaymentsComponent } from './payments/payments.component';

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
    path:'payments',
    component:PaymentsComponent
  },
  {
    path:'rooms',
    component:RoomsComponent
  },
  {
    path: 'attribute/:name',
    component: AttributeComponent
  },
  {
    path: 'gallery/:name',
    component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
