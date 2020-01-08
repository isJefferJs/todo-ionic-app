import { Component, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {

  @ViewChild( IonList ) ionList: IonList;
  @Input() public listsFinished: boolean;

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.listsFinished = false;
  }

  goToList(id: string | number) {
    id = id.toString();

    if (this.listsFinished) {
      this.router.navigate(['tabs', 'tab2', 'agregar', id]);
    } else {
      this.router.navigate(['tabs', 'tab1', 'agregar', id]);
    }
  }

  async addList() {
    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      subHeader: 'crea tu nueva lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'volver',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'crear',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }

            const list = this.deseosService.createList(data.title);
            this.router.navigate(['tabs', 'tab1', 'agregar', list.id]);
            this.deseosService.saveStorage();
          }
        }
      ]
    });

    await alert.present();
  }

  deleteList(id: string) {
    this.deseosService.deleteList(id);
  }

  async editList( id: string | number) {
    let lista = this.deseosService.getList(id);

    const alert = await this.alertController.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'volver',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.ionList.closeSlidingItems();
            console.log('Confirm Cancel');
          }
        }, {
          text: 'modificar',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }
            this.ionList.closeSlidingItems();
            lista.titulo = data.title;
            this.deseosService.saveStorage();
          }
        }
      ]
    });

    await alert.present();
  }
}
