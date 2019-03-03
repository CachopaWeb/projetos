import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CadProdutoService } from '../servicos/cad-produto.service';
import { Produtos } from '../models/produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css'],
})
export class CadastroProdutoComponent implements OnInit {
  cadProduto: FormGroup;
  produtos: Produtos[] = [];
  selectedFiles: FileList;
  codigo: number = 0;
  detectFiles(event) {
      this.selectedFiles = event.target.files;
      console.log(this.selectedFiles.item(0));
  }
  
  constructor(private cadProdutoService: CadProdutoService) { }

  ngOnInit() {
    this.cadProduto = new FormGroup({
      nome: new FormControl(''),
      valor: new FormControl(''),
      descricao: new FormControl('')
    });
    this.cadProdutoService.getProduto().snapshotChanges()
    .subscribe(res =>{
      this.codigo = res.length;
    });
  }
 
  onSubmit(){
    //todo gravar produto com servico
    let produto = new Produtos(this.codigo+1, 
                                  this.cadProduto.value.nome,
                                  this.cadProduto.value.valor,
                                  1,
                                  this.selectedFiles.item(0),
                                  this.selectedFiles.item(0).name,
                                  0,
                                  this.cadProduto.value.descricao);
    this.cadProdutoService.adicionarProduto(produto)
    this.cadProduto.reset();
  }
}
