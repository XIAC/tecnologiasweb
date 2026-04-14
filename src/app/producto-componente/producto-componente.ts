import { Component, signal } from '@angular/core';
import { Producto } from '../modelos/producto.model';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../modelos/categoria.model';
import { IndexDBServicio } from '../servicios/index-dbservicio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-componente',
  imports: [FormsModule, CommonModule],
  templateUrl: './producto-componente.html',
  styleUrl: './producto-componente.css',
})
export class ProductoComponente {
  productos = signal<Producto[]>([]);
  categorias = signal<Categoria[]>([]);

  nuevoProdc = signal<Producto>({
    nombre: '',
    precio: 0,
    categoriaId: 0
  });

  constructor(private db : IndexDBServicio) {
    this.iniciar();
  }

  async iniciar(){
    this.db.agregarCategoria({nombre: 'Telefonos'});
    this.db.agregarCategoria({nombre: 'Laptops'});
    this.categorias.set( await this.db.todasCategorias());
    console.log(this.categorias());
  }
  guardar(){
    console.log("se guardo correcatmente");
    console.log(this.nuevoProdc);
    // this.db.guardarProducto();
  }

  editar(){}

  eliminar(){}
}
