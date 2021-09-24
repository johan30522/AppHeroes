import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent implements OnInit {
  public heroes: Heroe[] = [];
  constructor(
    private readonly heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.loadHeroes();
  }

  public loadHeroes() {
    this.heroesService.getHeroes()
      .subscribe(
        (listaHeroes: Heroe[]) => {
          this.heroes = listaHeroes
          //console.log(this.heroes);
    
        },
        (error) => {
          console.log(error);
          this.heroes = [];
        }
      )
  }

}
