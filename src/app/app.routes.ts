import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'produtos/todos'
    },
    
    {
        path: 'produtos/:categoria',
        loadComponent: () =>  import('./paginas/produtos-grid/produtos-grid')
    },
    {
        path: 'wishlist',
        loadComponent: () => import('./paginas/minha-wishlist/minha-wishlist')
    }
];
