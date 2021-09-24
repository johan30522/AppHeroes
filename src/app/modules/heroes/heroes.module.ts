import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../../shared/shared.module';


import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ConfirmComponent } from './components/confirm/confirm.component';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeCardComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HeroesModule { }
