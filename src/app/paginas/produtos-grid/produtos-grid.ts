import { Component, computed, inject, input, signal } from '@angular/core';
import { Produto } from '../../modelos/produto';
import { CardProduto } from '../../componentes/card-produto/card-produto';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatListItemAvatar } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../ecommerce-store';



@Component({
  standalone: true,
  selector: 'app-produtos-grid',
  imports: [CardProduto, MatSidenavContainer, MatSidenavContent, MatSidenav, MatNavList, MatListItem, MatListItemAvatar, RouterLink, TitleCasePipe],
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened="true">
        <div class="p-6">
          <h2 class="text-lg text-gray-900"> Categorias </h2>
          <mat-nav-list>
            @for (cat of categorias(); track cat) {
              <mat-list-item [activated]="cat===categoria()" class="my-2" [routerLink]="['/produtos', cat]">
                <span matListItemTitle class="font-medium" [class]="cat === categoria() ? '!text-white': null">
                  {{cat | titlecase}}
                </span>
              </mat-list-item>
            }
          </mat-nav-list>
        </div>
      </mat-sidenav>
      <mat-sidenav-content class="bg-gray-100 p-6 h-full">
        <h1 class="text-2xl font-bold text-gray-900" >  {{categoria() | titlecase}} </h1>
        <p class="text-base text-gray-600 mb-6"> 
          {{ $any(store).produtosFiltrados().length}} Produtos encontrados
        </p>
        <div class="responsive-grid">
          @for (produto of $any(store).produtosFiltrados(); track produto.id) {
          <app-card-produto [produto]= "produto"/>
          }
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: ``,
})
export default class ProdutosGrid {
  
  categoria = input<string>('todos');
  
  store = inject(EcommerceStore);

  categorias = signal<string[]>(['todos', 'informatica', 'audio', 'wearables', 'smartphones', 'monitores', 'perifericos'])

  constructor(){
    this.store.setCategoria(this.categoria);
  }
}
