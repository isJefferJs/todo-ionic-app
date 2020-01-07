import { Injectable } from '@angular/core';
import { ListaModule } from '../models/lista-item/lista.module';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  public listas: ListaModule[];

  constructor() {
    this.listas = [];
    this.loadStorage();
  }

  getList( id: string | number) {
    id = Number(id);
    const list =  JSON.parse(localStorage.getItem('data'))
                      .find(data => data.id === id);
    return list;
  }

  createList( title: string ) {
    try {
      const elemList: ListaModule = new ListaModule(title);
      this.listas.push( elemList );
      return elemList;
    } catch (error) {
      console.error('ERROR', error);
      return false;
    }
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  loadStorage() {

    if (localStorage.getItem('data')
        && localStorage.getItem('data') !== 'null') {
          this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }
}
