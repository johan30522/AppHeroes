import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, tap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  public heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    publisher: Publisher.DCComics,
    first_appearance: ''
  };
  public publishers =
    [{
      id: 'DC Comics',
      desc: 'Dc - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }

    ]
  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly heroeService: HeroesService,
    private readonly router: Router,
    private readonly _snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.loadInfo();
    }

  }

  public loadInfo() {
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.heroeService.getHeroe(param.id)),
        tap(console.log)
      )
      .subscribe(
        (resp) => {

          this.heroe = resp;
        }
      )
  }
  public salvarHeroe() {
    console.log(this.heroe);
    if (this.heroe.superhero.trim().length === 0) {
      return
    }
    if (this.heroe.id) {
      this.heroeService.updateHeroe(this.heroe)
        .subscribe((heroeSalvado: Heroe) => {
          console.log(heroeSalvado);
          this.openSnackBar('Heroe Actualizado');
        });
      console.log('salvando');

    } else {
      this.heroeService.creatHeroe(this.heroe)
        .subscribe((heroeSalvado: Heroe) => {
          console.log(heroeSalvado);
          //this.router.navigate(['/heroes/editar/dc-batman'])
          this.openSnackBar('Heroe Creado');
          this.router.navigate(['/heroes/editar/', heroeSalvado.id]);
        });
      console.log('salvando');

    }

  }
  public borrarHeroe(id: string) {
    let dialog = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: this.heroe
    });
    dialog.afterClosed().subscribe(
      (resp) => {
        if (resp) {
          this.heroeService.deleteHeroe(id)
            .subscribe((resp) => {
              console.log(resp);
              this.openSnackBar('Heroe Eliminado')
              this.router.navigate(['/heroes/listado'])
            });
        }
      }
    )

  }
  openSnackBar(msj: string) {
    this._snackBar.open(msj, 'ok!', { duration: 2500 })
  }

}
