import { ListaItemModule } from './lista-item.module';

export class ListaModule {
  id: number;
  titulo: string;
  createdAt: Date;
  finishedAt: Date;
  finished: boolean;
  items: ListaItemModule[];

  constructor( titulo: string ) {
    this.titulo = titulo;
    this.createdAt = new Date();
    this.finished = false;
    this.items = [];
    this.id = new Date().getTime();

  }
}
