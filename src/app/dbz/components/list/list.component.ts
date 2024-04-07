import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  /* Con poner el @Input() delante de una propiedad, ya estoy indicando que el componente puede recibir una variable con el nombre de la propiedad.
    Se puede definir el nombre de la propiedad entre comillas dentro del paréntesis.
    Si no se le envía nada, el valor por defecto es el que está definido aquí abajo.
  */
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  /*También valdría esto:
    public onDelete: EventEmitter = new EventEmitter<number>();
    */

  /*onDeleteCharacter(index:number):void {
    this.onDelete.emit(index);
  }*/

  // Primera solución: Si el id no existe, entonces no hace nada y sale. Y así nunca se llama el EventEmitter. Mejor rendimiento.
  onDeleteCharacter(id?:string):void {
    if (!id) return;

    this.onDelete.emit(id);
  }

  // Segunda solución: Enviar en el HTML un vacío si no hay string
  /*onDeleteCharacter(id:string):void {
    this.onDelete.emit(id);
  }*/

}
