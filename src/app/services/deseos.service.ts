import { Injectable } from '@angular/core';
import { ListaModule } from '../models/lista-item/lista.module';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  public listas: ListaModule[] = [];

  constructor() {}

  createList( title: string ) {
    this.listas.push( new ListaModule(title) );
  }
}
