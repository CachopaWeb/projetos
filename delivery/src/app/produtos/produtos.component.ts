import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { Produtos } from '../entities/produtos';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Item } from '../entities/item';
import { CartService } from '../services/cart.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: Produtos[];
  cart: any[] = [];
  total: number = 0;
  constructor(private produtoService : ProdutosService, 
              private cartService : CartService, 
              private route : ActivatedRoute,
              private rota : Router) {}
  ngOnInit() {
    this.route.params.subscribe(params =>{
      var id = params['id'];
      if(id != "0"){
        this.produtos = this.produtoService.findAll(id);
      }
    });
    this.cart = this.cartService.getItensCart();
    if (this.cart = null){
      this.cart = [];
    }
  }

  addCarrinho()
  {
      this.produtos.forEach(prod => {
        if (prod.quantidade > 0)
        {
          var item = {
            produto : prod,
            quantidade:prod.quantidade
          };
          if(this.cart == null){
            this.cart.push(item);
            this.cartService.addItemCart(item);
            // alert("Adicionado ao carrinho...0");
          }else{
            let index: number = -1;
            for(let i = 0; i < this.cart.length; i++)
            {
              let item : Item = this.cart[i];
              if (item.produto.id.toString() == prod.id.toString()){
                index = i;
                break;
              }
            }
            if(index == -1){
              this.cart.push(item);
              this.cartService.addItemCart(item);
              // alert("Adicionado ao carrinho... 1");
            }else{
              let pro_item : Item = this.cart[index];
              pro_item.quantidade += 1;
              this.cart[index] = pro_item;
              this.cartService.addItemCart({produto:item.produto, quantidade:pro_item.quantidade}); 
              // alert("Adicionado ao carrinho...2");
            }
          }
        }
      });
      //mudo a rota para o carrinho
      this.rota.navigateByUrl('cart');      
  }

  add(item : Produtos){
    item.quantidade += 1;
    this.total +=  item.valor;
  }

  diminuir(item : Produtos){
    if (item.quantidade > 0){
      item.quantidade -= 1;
      this.total -= item.valor;
    }
  }
}
