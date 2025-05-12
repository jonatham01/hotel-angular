import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  username:string = "";
  role:string = "";

  constructor(
    private authService:AuthService,
  ){}

   ngOnInit(): void {
    this.authService.user$.subscribe(data=>{
      if(data?.username != null){
        this.username = data?.username;
        this.role = data?.role;
      }
    });
  }
}
