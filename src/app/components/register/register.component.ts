import { Component } from '@angular/core';
import { UserRequestDTO } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

   dto:UserRequestDTO={
    userName :'',
    name: '',
    password: '',
    repeatedPassword:'',
    role: '',
  };

  userNameError=false ;
  nameError=false ;
  passError=false ;
  repeatedError=false ;

  constructor(
    private authService:AuthService
  ){}

  register(){
    this.authService.create(this.dto);
  }

 



}
