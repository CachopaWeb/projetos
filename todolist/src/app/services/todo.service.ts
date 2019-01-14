import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private listaItem : AngularFireList<Item>;
  constructor(private db : AngularFireDatabase) { 
    this.listaItem = this.db.list('/itens');
  }

  getItem(){
    return this.listaItem;
  }

  setItem(item : string, id : number){
    this.listaItem.push({
      id:id++,
      titulo:item,
      checado:false
    });
  }

  checkOrUnCheck($key : string, flag : boolean){
    this.db.object('/itens/'+$key).update({checado : flag});
  }

  deleteItem($key : string){
    this.db.object('/itens/'+$key).remove();
  }
}
