import { Routes } from '@angular/router';
import { NegociosComponente } from './negocios-componente/negocios-componente';
import { ItemComponente } from './item-componente/item-componente';
import { ProductoComponente } from './producto-componente/producto-componente';
import { CategoriaComponente } from './categoria-componente/categoria-componente';

export const routes: Routes = [
    {path : 'negocios', component: NegociosComponente} ,
    {path : 'lista-items', component: ItemComponente},
    {path : 'productos', component: ProductoComponente},
    {path : 'categorias', component: CategoriaComponente},
];
