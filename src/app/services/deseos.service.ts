import { Injectable } from '@angular/core';
import { ListaModule } from '../models/lista-item/lista.module';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  public lists: ListaModule[];

  constructor() {
    this.lists = [];
    this.loadStorage();
  }

  getList( id: string | number) {
    id = Number(id);
    return this.lists.find((data: ListaModule) => data.id === id);;
  }

  createList( title: string ) {
    const newList: ListaModule = new ListaModule(title);
    this.lists.push( newList );
    return newList;
  }

  deleteList( id: string | number) {
    id = Number(id);
    this.lists = this.lists.filter(list => list.id !== id);
    this.saveStorage();
  }

  modifyList( id: string | number) {
    //id = Number(id);
    //this.lists = this.lists.filter(list => list.id !== id);
    //this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {
    if (localStorage.getItem('data')
        && localStorage.getItem('data') !== 'null') {
          this.lists = JSON.parse(localStorage.getItem('data'));
    } else {
      this.lists = [];
    }
  }
}
