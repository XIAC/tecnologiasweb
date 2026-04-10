import { Injectable, signal } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServicio {
  private mensaje = signal<string>('HOla tec web');
  private lista_usuarios = signal<Usuario[]>([]);

  getMensaje(){
    return this.mensaje;
  }

  registrarUsuario(usuario: Usuario){
    if (!usuario.nombre || !usuario.correo)
        this.mensaje.set("El nombre y correo son obligatorios");
    
    this.lista_usuarios.update(lista => [...lista, usuario]);
    // this.listausario1.push(usuario);
    this.mensaje.set("Se han guardado los datos correctamente");
    console.log(this.lista_usuarios());
    // console.log(this.usuario);
  }

}
