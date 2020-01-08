import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {}

  goToList(id: string | number) {
    id = id.toString();
    this.router.navigate(['tabs', 'tab1', 'agregar', id]);
  }

  async addList() {
    // this.router.navigate(['tabs', 'tab1', 'agregar']);

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
          handler: ( data ) => {
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
}
