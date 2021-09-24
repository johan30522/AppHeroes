import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _userAuth: Usuario | undefined;

  constructor(
    private readonly http: HttpClient
    ) { }

  get auth() {
    return this._userAuth;
  }
  public verificaAutenticacion():Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }

    const url: string = `${this.baseUrl}/usuarios/${localStorage.getItem('token')}`;
    return this.http
      .get<Usuario>(url)
      .pipe(
        map(
          resp => {
            //console.log('verificaAutenticacion', resp);
            this._userAuth=resp;
            return true;
          })
      );

  }
  public login(id: string): Observable<Usuario> {
    const url: string = `${this.baseUrl}/usuarios/${id}`;
    return this.http
      .get<Usuario>(url)
      .pipe(
        tap(
          resp => {
            //console.log('autservice', resp);
            this._userAuth = resp;
            localStorage.setItem('token',this._userAuth.id.toString());
          })
      );

  }

  logout() {
    localStorage.removeItem('token');
    this._userAuth = undefined;
  }

}
