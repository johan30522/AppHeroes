import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl: string = environment.baseUrl + '/heroes';

  constructor(
    private readonly http: HttpClient
  ) { }

  public getHeroes(): Observable<Heroe[]> {

    return this.http
      .get<Heroe[]>(this.apiUrl);
   

 
  }
  public getHeroe(id:string): Observable<Heroe> {
    const url:string=`${this.apiUrl}/${id}`;
    return this.http
      .get<Heroe>(url);
   

 
  }

  public searchHeroes(termino:string): Observable<Heroe[]> {

    const params=new HttpParams()
    .set('q',termino)
    .set('_limit',5);
    return this.http
      .get<Heroe[]>(`${this.apiUrl}?q=${termino}&_limit=6`);
      //.get<Heroe[]>(this.apiUrl,{params});
  
  }

  public creatHeroe(heroe:Heroe) : Observable<Heroe> {
    return this.http
      .post<Heroe>(`${this.apiUrl}`, heroe);
  }

  public updateHeroe(heroe:Heroe) : Observable<Heroe> {
 
    return this.http
      .put<Heroe>(`${this.apiUrl}/${heroe.id}`, heroe);
  }

  public deleteHeroe(id:string) : Observable<any> {

    return this.http
      .delete<any>(`${this.apiUrl}/${id}`);
  }
}
