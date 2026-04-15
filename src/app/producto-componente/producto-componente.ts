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
  async guardar(){
    console.log("se guardo correcatmente");
    console.log(this.nuevoProdc());
    const producto = this.nuevoProdc();
    await this.db.agregarProductos(producto);
    this.productos.set( await this.db.todosProductos());

  }
  obtenerNombreCategoria(id: number) {
  return this.categorias().find(c => c.id == id)?.nombre || 'Sin categoria';
  }
  editar(){}

  eliminar(){}
}
