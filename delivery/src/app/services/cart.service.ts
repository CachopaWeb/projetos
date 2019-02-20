import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../entities/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ItensFB : AngularFireList<Item>;
  Itens : any[] = [];
  constructor(private FirebaseDb : AngularFireDatabase) {
    this.ItensFB = FirebaseDb.list('cart');
   }

  getItensCart(){
    // this.Itens = this.FirebaseDb.list("cart");
    this.Itens = JSON.parse(localStorage.getItem('cart'));
    if (this.Itens == null)
      this.Itens = [];     
    return this.Itens;  
  }

  addItemCart(item : any){
    localStorage.removeItem('cart/'+item.produto.id);
    this.Itens.push({
      produto : item.produto,
      quantidade : item.quantidade
    });
    localStorage.setItem('cart', JSON.stringify(this.Itens));
  }

  addItemCartFB(cart : Item[]){
    cart.forEach(item =>{
      this.ItensFB.push(item);
    })
  }

  removeItemCart($key : string){
    // this.Itens.remove($key);
    localStorage.removeItem($key);
  }

  reduzQtd(item : any){
    this.Itens.push({
      produto : item.produto,
      quantidade : item.quantidade
    });
  }
}
