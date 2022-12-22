import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor"];
  lastBorrado: string = "";

  borrarHeroe():void{
    console.log("Borrando...");
    this.lastBorrado = this.heroes.shift() || '';
    console.log(this.lastBorrado, " borrado...");
    
  }
}
