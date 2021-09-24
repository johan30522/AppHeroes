import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(
    private readonly router: Router,
    private readonly authService:AuthService
  ) { }

  ngOnInit(): void {

  }


  public login() {

    console.log('login');
    this.authService.login('1').subscribe(
      (usuario)=>{
        
       // this._user=usuario;

      
        this.router.navigateByUrl('/heroes/listado')
      }
    )
   // 

  }
   public loginsinlogin() {
    this.router.navigateByUrl('/heroes/listado')
  }
}
