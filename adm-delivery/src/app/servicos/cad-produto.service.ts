import { Injectable, Output, EventEmitter } from '@angular/core';
import { Produtos } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class CadProdutoService {
  produto: Produtos[];
  emitente: EventEmitter<Produtos[]> = new EventEmitter();
  constructor() { }

  adicionarProduto(p: Produtos){
    this.produto.push(p);
    this.emitente.emit(this.produto);
  }
}
