import { Injectable, EventEmitter } from '@angular/core';
import { Produtos } from '../models/produto';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CadProdutoService {
  produtos: AngularFireList<Produtos>;
  constructor(private db: AngularFireDatabase) {
    this.produtos = this.db.list('produtos');
   }

  getProduto(){
    return this.produtos;
  }

  adicionarProduto(p: Produtos){
    this.produtos.push(p);
  }
}
