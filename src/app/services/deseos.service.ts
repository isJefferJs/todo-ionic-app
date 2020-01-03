import { Injectable } from '@angular/core';
import { ListaModule } from '../models/lista-item/lista.module';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  public lista: ListaModule[] = [];

  constructor() {
    console.log('DeseosService Inicializado');
  }
}
