import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Itens : AngularFireList<Item>;
  Itens : any[] = [];
  // constructor(private FirebaseDb : AngularFireDatabase) { }

  getItensCart(){
    // this.Itens = this.FirebaseDb.list("cart");
    this.Itens = [];
    this.Itens = JSON.parse(localStorage.getItem('cart'));
    return this.Itens;  
  }

  addItemCart(item : any){
    this.Itens.push({
      produto : item.produto,
      quantidade : item.quantidade
    });
    localStorage.setItem('cart', JSON.stringify(this.Itens));
  }

  removeItemCart($key : string){
    // this.Itens.remove($key);
    this.Itens.slice(1, 2);
  }

  reduzQtd(item : any){
    this.Itens.push({
      produto : item.produto,
      quantidade : item.quantidade
    });
  }
}
