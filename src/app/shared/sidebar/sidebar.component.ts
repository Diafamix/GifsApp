import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor ( private gifsService: GifsService ) {}

  get historial() {
    return this.gifsService.historial;
    
  }

  mostrarGifs(item: string) {
    return this.gifsService.bucarGifs( item );
  }
}
