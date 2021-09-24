import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.authService.auth!==undefined && this.authService.auth.id) {
    //   return true;
    // }
    // console.log('bloqueado por el authward -Can activate');
    // return false;
    return this.authService.verificaAutenticacion()
      .pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado) {
            this.router.navigateByUrl('/auth/login');
          }
        })
      )

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.authService.auth!==undefined && this.authService.auth.id) {
    //   return true;
    // }
    // console.log('bloqueado por el authward -Can load');
    // return false;
    return this.authService.verificaAutenticacion()
    .pipe(
      tap(estaAutenticado => {
        if (!estaAutenticado) {
          this.router.navigateByUrl('/auth/login');
        }
      })
    )

  }
}
