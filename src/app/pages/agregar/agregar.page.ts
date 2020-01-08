import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { ListaModule } from '../../models/lista-item/lista.module';
import { ListaItemModule } from 'src/app/models/lista-item/lista-item.module';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {

  public list: ListaModule;
  public itemName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private deseosService: DeseosService
  ) {
    this.itemName = '';

    const listaId = this.activatedRoute.snapshot.paramMap.get('id');
    this.list = this.deseosService.getList( listaId );
  }

  addItemToList() {
    if (this.itemName.length === 0) { return; }

    const newItem = new ListaItemModule( this.itemName );
    this.list.items.push(newItem);

    this.itemName = '';
    this.deseosService.saveStorage();
  }
}
