import { computed } from "@angular/core";
import { Produto } from "./modelos/produto"
import { patchState, signalMethod, signalStore, withComputed, withMethods, withState } from "@ngrx/signals"


export type EcommerceState = {
    produtos: Produto[];
    categoria: string;
}

export const EcommerceStore = signalStore(
    {
        providedIn: 'root',
    },
    withState({
        produtos: [
            
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
        ],
        categoria: 'todos',
    }),
    withComputed(({ categoria, produtos }) => ({
  produtosFiltrados: computed(() => {
    if (categoria() === 'todos') {
      return produtos();
    }

    return produtos().filter(
      (p) => p.categoria === categoria().toLowerCase()
    );
    }),
    })),

    withMethods((store) => ({
        setCategoria: signalMethod<string>((categoria: string) => {
            patchState(store, { categoria })
        })
        }
    )),
);