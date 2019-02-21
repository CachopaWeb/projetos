import { Component, OnInit, Input } from '@angular/core';
import { Produtos } from '../models/produto';
import { CadProdutoService } from '../servicos/cad-produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  @Input() lista: Produtos[] = [];
  constructor(private produtoService: CadProdutoService) { }

  ngOnInit() {
    this.produtoService.emitente.subscribe(el =>{
      console.log(el);
      this.lista = el;
    });
  }

}
