import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo : string = 'Contador';
  public numero : number = 10;
  public multiplo : number = 5;

  public sumar() : void{
    this.numero += this.multiplo;
  }

  public restar(){
    this.numero -= this.multiplo;
  }

  public contador(){
    this.numero += this.multiplo;
  }
}
