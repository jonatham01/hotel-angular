import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  
  {
    path: 'admin',
    canActivate:[adminGuard],
    loadChildren:() =>import('./admin/admin.module').then(m=> m.AdminModule)
  },
  {
    path:'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
