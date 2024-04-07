import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'She Hulk', 'Thor', 'Ironman'];
  //public deletedHero: string = '';
  public deletedHero?: string;

  removeLastHero(): void {
    //const deletedHero = this.heroNames.pop();
    //console.log({ deletedHero });
    this.deletedHero = this.heroNames.pop();
  }

}
