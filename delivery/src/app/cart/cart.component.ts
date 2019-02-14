import { Component, OnInit } from '@angular/core';
import { Item } from '../entities/item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[CartService]
})
export class CartComponent implements OnInit {
  public total : number = 0;
  public ItensCartArray: Item[] = [];
  constructor(private cartService : CartService) {  }

  ngOnInit() {
      this.carregarCarrinho();
  }
  carregarCarrinho() : void {
    this.total = 0;
    let itens = this.cartService.getItensCart();
    if (itens != null){
      itens.forEach(el =>{
        this.ItensCartArray.push(el);
        this.total += el.produto.valor * el.quantidade;
      });        
    }
  }
  
  deletaItem(item: any){
    this.cartService.removeItemCart(item.$key);
    this.total -= item.produto.valor * item.produto.quantidade;
  }
}
