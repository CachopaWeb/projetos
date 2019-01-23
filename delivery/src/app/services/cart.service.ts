import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Itens : AngularFireList<Item>;
  constructor(private FirebaseDb : AngularFireDatabase) { }

  getItensCart(){
    this.Itens = this.FirebaseDb.list("cart");
    return this.Itens;  
  }

  addItemCart(item : Item){
    this.Itens.push(item);
  }

  removeItemCart($key : string){
    this.Itens.remove($key);
  }

  reduzQtd(item : any){
    this.Itens.push({
      produto : item.produto,
      quantidade : item.quantidade
    });
  }
}
