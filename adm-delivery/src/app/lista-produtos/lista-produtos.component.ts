import { Component, OnInit, Input } from '@angular/core';
import { Produtos } from '../models/produto';
import { CadProdutoService } from '../servicos/cad-produto.service';
import { listChanges } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  lista: Produtos[];
  constructor(private produtoService: CadProdutoService) { }

  ngOnInit() {
    this.produtoService.getProduto().snapshotChanges()
    .subscribe(el =>{
      this.lista = [];
      el.forEach(item =>{
        // console.log('itens = '+item.payload.val().nome);
        this.lista.push(item.payload.val());
      })
    });  
  }

}
