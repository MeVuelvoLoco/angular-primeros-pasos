import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Mi primera app';
  public title: string = "Mi primera app";
  public counter: number = 10;

  increaseBy (value: number): void {
    this.counter += value;
  }

  reset (): void {
    this.counter = 10;
  }

}
