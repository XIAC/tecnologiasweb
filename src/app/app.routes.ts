import { Routes } from '@angular/router';
import { NegociosComponente } from './negocios-componente/negocios-componente';
import { ItemComponente } from './item-componente/item-componente';

export const routes: Routes = [
    {path : 'negocios', component: NegociosComponente} ,
    {path : 'lista-items', component: ItemComponente}
];
