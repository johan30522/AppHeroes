import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles:[`
  mat-card {
    margin-top:20px
  }
  
  `]
})
export class HeroeCardComponent implements OnInit {

  @Input('heroeItem') public heroe!:Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
