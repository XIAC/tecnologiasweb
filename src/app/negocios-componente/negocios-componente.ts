import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-negocios-componente',
  imports: [],
  templateUrl: './negocios-componente.html',
  styleUrl: './negocios-componente.css',
})
export class NegociosComponente {
  nombre = signal ('Saltenias TIKI') ;
  categoria =  signal ('Comida') ;
  ubicacion = signal ('Blanco Galindo KM 11');
}
