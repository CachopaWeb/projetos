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
  constructor(private produtoService : ProdutosService, private cartService : CartService, private route : ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params =>{
      var id = params['id'];
      if(id != "0"){
        this.produtos = this.produtoService.findAll(id);
      }
    });
  }

  addCarrinho(id:string)
  {
      if (id)
      {
        var item = {
          produto : this.produtoService.find(id),
          quantidade:1
        };
        var cart : Item[] = [];
        this.cartService.getItensCart().snapshotChanges()
        .subscribe(item =>{
          item.forEach(element =>{
            var x = element.payload.val();
            cart.push(x);
          })
        });
        if(cart == null){
          cart.push(item);
          this.cartService.addItemCart(item);
          alert("Adicionado ao carrinho...0");
        }else{
          let index: number = -1;
          for(let i = 0; i < cart.length; i++)
          {
            let item : Item = cart[i];
            if (item.produto.id.toString() == id){
              index = i;
              break;
            }
          }
          if(index == -1){
            cart.push(item);
            this.cartService.addItemCart(item);
            alert("Adicionado ao carrinho... 1");
          }else{
            let item : Item = cart[index];
            item.quantidade += 1;
            cart[index] = item;
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
