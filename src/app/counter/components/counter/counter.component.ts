/* Hecho a mano:
import { Component } from "@angular/core";

// @Component es un decorador que transforma mi clase en un componente
@Component ({
  selector: 'app-counter',
  template: '<h1> Hola Counter Component </h1>'
})
export class CounterComponent {

}
*/

// Si uso las backtips: ` puedo meter html en múltiples líneas.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h3> Counter: {{ counter }}</h3>
      <button (click)="increaseBy(1)">+1</button>
      <button (click)="reset()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent implements OnInit {
  public counter: number = 10;

  constructor() { }

  ngOnInit() { }

  public increaseBy (value: number): void {
    this.counter += value;
  }

  public reset (): void {
    this.counter = 10;
  }

}
