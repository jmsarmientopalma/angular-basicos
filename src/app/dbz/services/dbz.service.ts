import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "Vegeta",
          poder: 8500
        },
        {
          nombre: "Bulma",
          poder: 5
        }
    ];

      
    public get personajes() : Personaje[] {
        return [...this._personajes];
    }

    constructor() {
        console.log('Servicio Inicializado'); 
    }

    addCharacter(character: Personaje): void{
        this._personajes.push(character);
    }
      
}