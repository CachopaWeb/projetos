import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  cadProduto: FormGroup;
  constructor() { }

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
  }
}
