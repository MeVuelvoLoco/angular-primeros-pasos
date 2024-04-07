import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

// @Injectable -> Decorador que indica a Angular que esto es un servicio.
@Injectable({
  providedIn: 'root'
})

export class DbzService {

    // No se importan las interfaces, porque después no se transpilan nunca a javascript.
  // Definimos este tipo con datos como ejemplo para el @Input.
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },{
      id: uuid(),
      name: 'Goku',
      power: 9500
    }, {
      id: uuid(),
      name: 'Vegeta',
      power: 7000
    }
  ];

   // Usando desestructuración en lugar de poner character.name y character.power.
/*  onNewCharacterMP ( { name, power }: Character): void {
  //onNewCharacterMP ( character: Character): void {
    //console.log('Main page');
    //console.log(character);

    // push -> Añade el elemento al final del array.
    // unshift -> Añade el elemento al inicio del array.


    const newCharacter: Character = {
      id: uuid(),
      name: name,
      power: power
    };

    this.characters.push(newCharacter);
  }*/

  // Para el caso donde el objeto tenga muchas propiedades y así no tener que desestructurar una por una.
/*  onNewCharacterMP ( character: Character): void {

      // push -> Añade el elemento al final del array.
      // unshift -> Añade el elemento al inicio del array.

      // ... -> spread : Le dice que coja todas las propiedades del objeto y las asigne al objeto que está creando.
      // En el caso de que en la variable venga un id, debería ponerser primero el spread para sobreescribirlo con nuestro uuid : (...character, id: uuid())
      const newCharacter: Character = {id: uuid(), ...character};

      this.characters.push(newCharacter);
    }*/

    // Refactorización: Lo ideal sería poner el spread antes del id.
    addCharacter ( character: Character): void {
      const newCharacter: Character = {id: uuid(), ...character};

      this.characters.push(newCharacter);
    }


/*  onDeleteCharacter (index: number): void {
    //Usar splice: this.characters.splice();
    this.characters.splice(index,1);
  }*/

  deleteCharacterById (id:string) {
    this.characters = this.characters.filter (character => character.id !== id);
  }

  //constructor() { }

}
