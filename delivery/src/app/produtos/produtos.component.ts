import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { Produtos } from '../entities/produtos';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../entities/item';
import { CartService } from '../services/cart.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos : Produtos[];
  cart : any[] = [];
  constructor(private produtoService : ProdutosService, private cartService : CartService, private route : ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params =>{
      var id = params['id'];
      if(id != "0"){
        this.produtos = this.produtoService.findAll(id);
      }
    });
    this.cartService.getItensCart().snapshotChanges()
    .subscribe(item =>{
      item.forEach(element =>{
        var x = element.payload.val();
        this.cart.push({
          produto : x.produto,
          quantidade : x.quantidade,
          $key : element.key
        });
      })
    });
  }

  diminuiQtd(prod : Produtos){
    var item : any[] =[];
    this.cart.forEach(el =>{
      if (el.produto.id == prod.id){
        if (el.quantidade >= 1){
          el.quantidade = el.quantidade -1;
        }else{
          el.quantidade = 0;
        }
        item = el;
      }
    })
    console.log(item);
    this.cartService.reduzQtd(item);
  }

  addCarrinho(id:string)
  {
      if (id)
      {
        var item = {
          produto : this.produtoService.find(id),
          quantidade:1
        };
         if(this.cart == null){
          this.cart.push(item);
          this.cartService.addItemCart(item);
          alert("Adicionado ao carrinho...0");
        }else{
          let index: number = -1;
          for(let i = 0; i < this.cart.length; i++)
          {
            let item : Item = this.cart[i];
            if (item.produto.id.toString() == id){
              index = i;
              break;
            }
          }
          if(index == -1){
            this.cart.push(item);
            this.cartService.addItemCart(item);
            alert("Adicionado ao carrinho... 1");
          }else{
            let item : Item = this.cart[index];
            item.quantidade += 1;
            this.cart[index] = item;
            this.cartService.addItemCart(item); 
            alert("Adicionado ao carrinho...2");
          }
        }
        // if(localStorage.getItem("cart") == null){
        //   let cart : any = [];
        //   cart.push(JSON.stringify(item));
        //   localStorage.setItem("cart", JSON.stringify(cart));
        //   alert("Adicionado ao carrinho...0");
        // }else{
        //   var cart : any = JSON.parse(localStorage.getItem("cart"));
        //   let index: number = -1;
        //   for(let i = 0; i < cart.length; i++)
        //   {
        //     let item : Item = JSON.parse(cart[i]);
        //     if (item.produto.id.toString() == id){
        //       index = i;
        //       break;
        //     }
        //   }
        //   if(index == -1){
        //     cart.push(JSON.stringify(item));
        //     localStorage.setItem("cart", JSON.stringify(cart));
        //     alert("Adicionado ao carrinho... 1");
        //   }else{
        //     let item : Item = JSON.parse(cart[index]);
        //     item.quantidade += 1;
        //     cart[index] = JSON.stringify(item);
        //     localStorage.setItem("cart", JSON.stringify(cart)); 
        //     alert("Adicionado ao carrinho...2");
        //   }
        // }
      }
    }
}
