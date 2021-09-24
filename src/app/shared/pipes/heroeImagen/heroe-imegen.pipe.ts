import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../../../modules/heroes/interfaces/heroe.interface';

@Pipe({
  name: 'heroeImegen',
  pure:true
})
export class HeroeImegenPipe implements PipeTransform {

  transform(heroe: Heroe, ...args: unknown[]): string {

    //let imgName:string=(heroe.id)?`assets/heroes/${heroe.id}.jpg`:((heroe.alt_img)?heroe.alt_img:'assets/no-image.png');
    if (!heroe.id && !heroe.alt_img) {
      return 'assets/no-image.png'
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    }else{
      return `assets/heroes/${heroe.id}.jpg`;
    }
    
  }

}
