import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CadProdutoService } from '../servicos/cad-produto.service';
import { Produtos } from '../models/produto';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css'],
})
export class CadastroProdutoComponent implements OnInit {
  cadProduto: FormGroup;
  @Output() produtos: Produtos[] = [];
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  
  constructor(private cadProdutoService: CadProdutoService) { }

  ngOnInit() {
    this.cadProduto = new FormGroup({
      nome: new FormControl(''),
      valor: new FormControl(''),
      foto: new FormControl(''),
      descricao: new FormControl('')
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
                   0,
                   this.cadProduto.value.descricao)
    );
  }
}
