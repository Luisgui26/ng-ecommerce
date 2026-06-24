import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'produtos'
    },
    
    {
        path: 'produtos',
        loadComponent: () =>  import('./paginas/produtos-grid/produtos-grid')
    },
    {
        path: 'wishlist',
        loadComponent: () => import('./paginas/minha-wishlist/minha-wishlist')
    }
];
