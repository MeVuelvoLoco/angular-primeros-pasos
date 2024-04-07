import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // Para emitir el evento. En este caso, emite un objeto de tipo Character. Y se pone el Output para enviarlo para arriba (si se quiere usar otro nombre, se pone dentro de los paréntesis.)
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void {

    //console.log(this.character);
    if (this.character.name.length === 0) return; // Pequeña validación

    this.onNewCharacter.emit(this.character); // Envío de datos la main page.

    /*this.character.name = '';
    this.character.power = 0;*/
    this.character = { name : '', power : 0};
  }
}
