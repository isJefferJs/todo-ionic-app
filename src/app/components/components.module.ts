import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListsComponent } from './lists/lists.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    ListsComponent
  ],
  exports: [
    ListsComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
