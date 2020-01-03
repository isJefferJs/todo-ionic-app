import { Injectable } from '@angular/core';
import { ListaModule } from '../models/lista-item/lista.module';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  public listas: ListaModule[] = [];

  constructor() {

    const listaTareas: ListaModule = new ListaModule('Lista tareas');
    const listaMercado: ListaModule = new ListaModule('Lista mercado');

    this.listas.push(listaTareas, listaMercado);
  }
}
