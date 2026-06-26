import { Component, input, output } from '@angular/core';
import { Produto } from '../../modelos/produto';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card-produto',
  imports: [ MatButton, MatIcon],
  template: ` 
  <div class="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
          <img [src]="produto().imagemUrl" class="w-full h-[300px] object-cover rounded-t-xl" />
          <div class="p-5 flex flex-col flex-1">
            <h3 class="text-lg font-semibold text-gray-900 leading-tight">
              {{produto().nome}}
            </h3>
            <p class="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
              {{produto().descricao}}
            </p>

            <div class="text-sm font-medium mb-4">
              {{produto().emEstoque  ? "Em estoque" : "Fora de estoque"}}
            </div>

            <div class="flex items-center justify-between mt-auto">
              <span class="text-2xl font-bold text-gray-900">
                \${{produto().preco}}
              </span>
              <button matButton="filled" class="flex items-center gap-2" (click)="addCarrinhoClicked.emit(produto())">
                <mat-icon>shopping_cart</mat-icon>
                Add carrinho
              </button>
            </div>
          </div>
        </div>
   `,
  styles: ``,
})
export class CardProduto {
  produto = input.required<Produto>()

  addCarrinhoClicked = output<Produto>();

}
