import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CadProdutoService } from '../servicos/cad-produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  cadProduto: FormGroup;
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
    this.cadProdutoService.adicionarProduto({id:1, 
                                             nome:this.cadProduto.value.nome, 
                                             valor:this.cadProduto.value.valor,
                                             quantidade:this.cadProduto.value.quantidade,
                                             foto:this.cadProduto.value.foto,
                                            pro_emp:1});
  }
}
