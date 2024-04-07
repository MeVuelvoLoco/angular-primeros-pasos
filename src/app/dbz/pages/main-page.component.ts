import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  /* Movido todo al dbz.service.ts
  // No se importan las interfaces, porque después no se transpilan nunca a javascript.
  // Definimos este tipo con datos como ejemplo para el @Input.
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },{
      name: 'Goku',
      power: 9500
    }, {
      name: 'Vegeta',
      power: 7000
    }
  ];

  onNewCharacterMP ( character: Character): void {
    //console.log('Main page');
    //console.log(character);

    // push -> Añade el elemento al final del array.
    // unshift -> Añade el elemento al inicio del array.

    this.characters.push(character);
  }

  onDeleteCharacter (index: number): void {
    //Usar splice: this.characters.splice();
    this.characters.splice(index,1);
  }
*/

// Hago una inyección de dependencias metiendo el servicio en los parámetros del constructor.
constructor (private dbzService: DbzService) {}

get characters(): Character[] {
  return [...this.dbzService.characters];
}

onDeleteCharacter( id: string): void {
  this.dbzService.deleteCharacterById( id );
}

onNewCharacter (character: Character): void {
  this.dbzService.addCharacter(character);
}

}
