import { Component, computed, input, signal } from '@angular/core';
import { Produto } from '../../modelos/produto';
import { CardProduto } from '../../componentes/card-produto/card-produto';
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatListItemAvatar } from '@angular/material/list';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-produtos-grid',
  imports: [CardProduto, MatSidenavContainer, MatSidenavContent, MatSidenav, MatNavList, MatListItem, MatListItemAvatar, RouterLink],
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened="true">
        <div class="p-6">
          <h2 class="text-lg text-gray-900"> Categorias </h2>
          <mat-nav-list>
            @for (categoria of categorias(); track categoria) {
              <mat-list-item class="my-2" [routerLink]="['/produtos', categoria]">
                <span matListItemTitle class="font-medium">
                  {{categoria}}
                </span>
              </mat-list-item>
            }
          </mat-nav-list>
        </div>
      </mat-sidenav>
      <mat-sidenav-content class="bg-gray-100 p-6 h-full">
        <h1 class="text-2xl font-bold text-gray-900 mb-6">  {{categoria()}} </h1>
        <div class="responsive-grid">
          @for (produto of produtosFiltrados(); track produto.id) {
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

  produtos = signal<Produto[]>([
    {
    id: '1',
    nome: 'Notebook Gamer Nitro X',
    descricao: 'Notebook com processador de última geração e placa de vídeo dedicada.',
    preco: 599.90,
    imagemUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&w=400&q=80',
    avaliacao: 4.8,
    contAvaliacao: 245,
    emEstoque: true,
    categoria: 'informatica'
  },
  {
    id: '2',
    nome: 'Mouse Gamer RGB Pro',
    descricao: 'Mouse ergonômico com 8 botões programáveis e iluminação RGB.',
    preco: 199.90,
    imagemUrl: 'https://picsum.photos/300/300?random=2',
    avaliacao: 4.6,
    contAvaliacao: 132,
    emEstoque: true,
    categoria: 'perifericos'
  },
  {
    id: '3',
    nome: 'Teclado Mecânico TKL',
    descricao: 'Teclado mecânico compacto com switches vermelhos.',
    preco: 349.90,
    imagemUrl: 'https://picsum.photos/300/300?random=3',
    avaliacao: 4.7,
    contAvaliacao: 89,
    emEstoque: true,
    categoria: 'perifericos'
  },
  {
    id: '4',
    nome: 'Monitor UltraWide 29"',
    descricao: 'Monitor Full HD UltraWide ideal para produtividade e jogos.',
    preco: 199.90,
    imagemUrl: 'https://picsum.photos/300/300?random=4',
    avaliacao: 4.9,
    contAvaliacao: 176,
    emEstoque: false,
    categoria: 'monitores'
  },
  {
    id: '5',
    nome: 'Headset Wireless SoundMax',
    descricao: 'Headset sem fio com cancelamento de ruído.',
    preco: 499.90,
    imagemUrl: 'https://picsum.photos/300/300?random=5',
    avaliacao: 4.5,
    contAvaliacao: 98,
    emEstoque: true,
    categoria: 'audio'
  },
  {
    id: '6',
    nome: 'Smartphone Vision 12',
    descricao: 'Tela AMOLED de 6.7 polegadas e câmera de 108MP.',
    preco: 899.90,
    imagemUrl: 'https://picsum.photos/300/300?random=6',
    avaliacao: 4.7,
    contAvaliacao: 321,
    emEstoque: true,
    categoria: 'smartphones'
  },
  {
    id: '7',
    nome: 'Smartwatch Fit Plus',
    descricao: 'Monitoramento cardíaco, sono e atividades físicas.',
    preco: 699.90,
    imagemUrl: 'https://picsum.photos/300/300?random=7',
    avaliacao: 4.4,
    contAvaliacao: 154,
    emEstoque: true,
    categoria: 'wearables'
  },
  {
    id: '8',
    nome: 'Caixa de Som Bluetooth Boom',
    descricao: 'Som potente com bateria de até 20 horas.',
    preco: 279.90,
    imagemUrl: 'https://picsum.photos/300/300?random=8',
    avaliacao: 4.3,
    contAvaliacao: 67,
    emEstoque: false,
    categoria: 'audio'
  }
  ]);

  produtosFiltrados = computed(() =>
  this.categoria().toLowerCase() === 'todos'
    ? this.produtos()
    : this.produtos().filter(
        p => p.categoria.toLowerCase() === this.categoria().toLowerCase()
      )
  );

  categorias = signal<string[]>(['todos', 'informatica', 'audio', 'wearables', 'smartphones', 'monitores', 'perifericos'])
}
