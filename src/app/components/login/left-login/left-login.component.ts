import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-login',
  templateUrl: './left-login.component.html',
  styleUrls: ['./left-login.component.css']
})
export class LeftLoginComponent {
  constructor(   
     private router:Router
  ){}

  toRoute(){
     this.router.navigateByUrl('/register')
  }
}
