import { Injectable } from '@angular/core';
import { IDBPDatabase, openDB } from 'idb';
import { Categoria } from '../modelos/categoria.model';
import { Producto } from '../modelos/producto.model';

@Injectable({
  providedIn: 'root',
})
export class IndexDBServicio {
  
  private dbPromise: Promise<IDBPDatabase>;
  constructor() {
    this.dbPromise = openDB('ventas', 2, { // Database name and version
      upgrade(db) { // This function is called if the database is new or the version is upgraded
         // Create an object store for products if it doesn't exist
        if (!db.objectStoreNames.contains('categorias')) {
          // createObjectStore(name, options)
          db.createObjectStore('categorias', { keyPath: 'id', autoIncrement: true  }); 
        }
        if (!db.objectStoreNames.contains('productos')) {
          // createObjectStore(name, options)
          db.createObjectStore('productos', { keyPath: 'id', autoIncrement: true  }); 
        }
      }
    });
    console.log('IndexedDB initialized', this.dbPromise);
  }

  async agregarCategoria(categoria: Categoria)  {
     return (await this.dbPromise).add('categorias',categoria);
  }
  async todasCategorias () : Promise<Categoria[]>{
    return (await this.dbPromise).getAll('categorias');
  }
  // Productos
  async agregarProductos(producto: Producto)  {
     return (await this.dbPromise).add('productos',producto);
  }
  async todosProductos () : Promise<Producto[]>{
    return (await this.dbPromise).getAll('productos');
  }
}
