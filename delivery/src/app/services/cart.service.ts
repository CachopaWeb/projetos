import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../entities/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Itens : any[];//AngularFireList<Item>;
  constructor(private FirebaseDb : AngularFireDatabase) { }

  getItensCart(){
    let cart = JSON.parse(localStorage.getItem("cart"));//this.FirebaseDb.list("cart");
    cart.forEach(el => {
      this.Itens.push(el);
    });
    return this.Itens;  
  }

  addItemCart(item : Item){
    this.Itens.push(item);
  }

  removeItemCart($key : string){
    this.Itens.pop();
  }

  reduzQtd(item : any){
    this.Itens.push({
      produto : item.produto,
      quantidade : item.quantidade
    });
  }
}
