import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  list: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private deseosService: DeseosService
  ) {
    this.activatedRoute.params.subscribe(
      (data) => {
        this.list = this.deseosService.getList(data.id);
      }
    );
  }

  ngOnInit() {
  }

}
