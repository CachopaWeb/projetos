import { Component, OnInit, Input } from '@angular/core';
import { Produtos } from '../models/produto';
import { CadProdutoService } from '../servicos/cad-produto.service';
import { DownloadImgService } from '../download-img.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  lista: Produtos[];
  constructor(private produtoService: CadProdutoService,
              private downloadImg: DownloadImgService) { }

  ngOnInit() {
    this.produtoService.getProduto().snapshotChanges()
    .subscribe(el =>{
      this.lista = [];
      el.forEach(item =>{
        // console.log('itens = '+item.payload.val().nome);
        let x: Produtos = item.payload.val();
        this.downloadImg.getImagem(x.url_img).subscribe(img =>{
          x.foto = img;
          this.lista.push(x);
        });
      })
    });  
  }

}
