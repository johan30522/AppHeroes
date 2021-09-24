import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, tap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`img{
    width:100%;
    border-radius:5px;
  }`]
})
export class HeroeComponent implements OnInit {
  public heroe!:Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly heroeService:HeroesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loadInfo();
  }
  public loadInfo(){
    this.activatedRoute.params
    .pipe(
      switchMap((param)=>this.heroeService.getHeroe(param.id)),
      tap(console.log)
    )
    .subscribe(
      (resp) => {
        this.heroe = resp;
        //console.log(this.heroe);
        //console.log(this.pais);
      }
    )
  }
  public regresar(){
    this.router.navigateByUrl('/heroes/listado');
  }

}
