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
    username :'',
    name: '',
    password: '',
    repeatedPassword:''
  };

  userNameError=false ;
  nameError=false ;
  passError=false ;
  repeatedError=false ;

  constructor(

    private authService:AuthService
  ){}

  register(){
    console.log(this.dto);
     this.userNameError = this.dto.username.trim() === '';
    this.nameError = this.dto.name.trim() === '';
    this.passError = this.dto.password.trim() === '';
    this.repeatedError = this.dto.repeatedPassword.trim() === '';

    if(!this.userNameError && !this.nameError && !this.passError && !this.repeatedError) {
      this.authService.create(this.dto);
    }
  }

 



}
