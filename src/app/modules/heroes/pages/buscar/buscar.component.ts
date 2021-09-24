import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public heroes:Heroe[]=[];
public termino:string='';
public heroeSelected!:Heroe|undefined;
  constructor(
    private readonly heroesService:HeroesService
  ) { }

  ngOnInit(): void {
  }
public buscando(){
  console.log(this.termino);
  this.heroesService.searchHeroes(this.termino.trim())
    .subscribe((resp)=>{
      this.heroes=resp
      console.log(this.heroes);
    },
      (error) => {
        console.log(error);;
      }
    
    )
}
public opcionSeleccionada(event:MatAutocompleteSelectedEvent){
console.log(event.option.value);
 if(event.option.value===''){
  this.heroeSelected=undefined;
   return;

 }
  let heroe:Heroe=event.option.value;
  console.log(heroe);
  this.termino=heroe.superhero;
  this.heroesService.getHeroe(heroe.id!)
    .subscribe((result:Heroe)=>{
      this.heroeSelected=result;
    })
}
}
