import { Component } from '@angular/core';
import { UserLoginRequestDTO } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  title = 'Login';

  loginData:UserLoginRequestDTO = {
    email:'',
    password: ''
  };
  emailError = false;
  passError = false;

  constructor(
    private authService : AuthService
  ){}

  toLogin(): void{
    
    if(this.loginData.email =='' && this.loginData.password ==''){ 
      this.emailError = true;
      this.passError=true;
    }
    else if(this.loginData.email !='' && this.loginData.password ==''){ 
      this.emailError = false;
      this.passError=true;
    }
   
    else if(this.loginData.email =='' && this.loginData.password !=''){
      this.emailError = true;
      this.passError=false;
    }
    else{
      this.emailError = false;
      this.passError=false;
      this.authService.loginAndGet(this.loginData);


  }
}
}
