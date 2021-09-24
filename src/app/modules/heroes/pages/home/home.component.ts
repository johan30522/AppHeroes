import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles:[ `
  .container-m {
    margin: 10px;
}`]
})
export class HomeComponent implements OnInit {
  private authUser:Usuario|undefined;

  constructor( private readonly router:Router,
    private readonly authService:AuthService) { }

  ngOnInit(): void {
    
  }

get auth(){
 return this.authService.auth;
}


  public logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login')
  }
}
