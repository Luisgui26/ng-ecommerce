import { Component, computed, input, signal } from '@angular/core';
import { Produto } from '../../modelos/produto';

@Component({
  selector: 'app-produtos-grid',
  imports: [],
  template: ` <p>produtos-grid works!</p> `,
  styles: ``,
})
export default class ProdutosGrid {

  categoria = input<string>('todos');

  produtos = signal<Produto[]>([
    {
    id: '1',
    nome: 'Notebook Gamer Nitro X',
    descricao: 'Notebook com processador de última geração e placa de vídeo dedicada.',
    preco: 5499.90,
    imagemUrl: 'https://picsum.photos/300/300?random=1',
    avaliacao: 4.8,
    contAvaliacao: 245,
    emEstoque: true,
    categoria: 'Informática'
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
    categoria: 'Periféricos'
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
    categoria: 'Periféricos'
  },
  {
    id: '4',
    nome: 'Monitor UltraWide 29"',
    descricao: 'Monitor Full HD UltraWide ideal para produtividade e jogos.',
    preco: 1299.90,
    imagemUrl: 'https://picsum.photos/300/300?random=4',
    avaliacao: 4.9,
    contAvaliacao: 176,
    emEstoque: false,
    categoria: 'Monitores'
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
    categoria: 'Áudio'
  },
  {
    id: '6',
    nome: 'Smartphone Vision 12',
    descricao: 'Tela AMOLED de 6.7 polegadas e câmera de 108MP.',
    preco: 2899.90,
    imagemUrl: 'https://picsum.photos/300/300?random=6',
    avaliacao: 4.7,
    contAvaliacao: 321,
    emEstoque: true,
    categoria: 'Smartphones'
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
    categoria: 'Wearables'
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
    categoria: 'Áudio'
  }
  ]);

  produtosFiltrados = computed(() => this.produtos().filter(p => p.categoria === this.categoria().toLocaleLowerCase()));
}
