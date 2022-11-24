import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  // Operador para asegurarse que le operador no es null "!"
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement> ;

  constructor( private giftService: GifsService ) {}

  buscar() {

    const valor = this.txtBuscar.nativeElement.value;

    this.giftService.bucarGifs( valor );

    this.txtBuscar.nativeElement.value = '';
  }
}
