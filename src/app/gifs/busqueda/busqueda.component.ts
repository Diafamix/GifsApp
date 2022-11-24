import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  buscar( terminoBusqueda: string ) {
    console.log( terminoBusqueda )
  }
}
