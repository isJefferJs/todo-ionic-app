import { Pipe, PipeTransform } from '@angular/core';
import { ListaModule } from '../models/lista-item/lista.module';

@Pipe({
  name: 'isFinished',
  pure: false
})
export class IsFinishedPipe implements PipeTransform {
  transform(listas: ListaModule[], finished: boolean = false): ListaModule[] {
    return listas.filter(item => item.finished === finished);
  }
}
