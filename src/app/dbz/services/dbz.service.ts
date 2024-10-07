import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import  { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DBZService {

  public characters: Character[] = [{
    id: uuid(),
    name:'Krillin',
    power:1000
  }, {
    id: uuid(),
    name: 'Goku',
    power:9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {
    //con el spread esparce todas las propiedades del objetoque coincidan
    //para este caso no importa,pero habría que poner primero el spread y luego lo q
    //que se quiere sobreescribir
    const newCharacter: Character = {id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter( i: number ) {
  //   this.characters.splice(i,1);
  // }
  deleteCharacterById(id?: string) {
    this.characters = this.characters.filter(character => character.id !== id)
  }

  constructor() { }

}
