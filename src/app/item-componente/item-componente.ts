import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NegociosComponente } from '../negocios-componente/negocios-componente';
import { UsuarioServicio } from '../servicios/usuario-servicio';

@Component({
  selector: 'app-item-componente',
  imports: [NegociosComponente, FormsModule],
  templateUrl: './item-componente.html',
  styleUrl: './item-componente.css',
})
export class ItemComponente {
protected readonly title = signal('tecnologiasweb');
  // mensaje: string = "HOla a tecnologias web";
  usuario = {
    nombre: '',
    correo: '',
    edad: null as number |null
  }

  constructor(public usuarioServicio : UsuarioServicio){

  }

  registrar(){
    this.usuarioServicio.registrarUsuario(this.usuario);
  }
  limpiar(){
    this.usuario = {
      nombre: '',
      correo: '',
      edad: null as number |null
    }
  }
}
