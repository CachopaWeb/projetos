import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CadProdutoService } from '../servicos/cad-produto.service';
import { Produtos } from '../models/produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  cadProduto: FormGroup;
  @Output() produtos: Produtos[] = [];
  constructor(private cadProdutoService: CadProdutoService) { }

  ngOnInit() {
    this.cadProduto = new FormGroup({
      nome: new FormControl(''),
      valor: new FormControl(''),
      quantidade: new FormControl(''),
      foto: new FormControl('')
    });
  }
 
  onSubmit(){
    //todo gravar produto com servico
    this.produtos.push(
      new Produtos(1, 
                   this.cadProduto.value.nome,
                   this.cadProduto.value.valor,
                   1,
                   this.cadProduto.value.foto,
                   this.cadProduto.value.quantidade)
    );
  }
}
