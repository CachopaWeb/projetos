import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../entities/item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private ListaItem : AngularFireList<Item>;
  item : Item;
  lastId : number;
  constructor(private db : AngularFireDatabase) { 
    this.ListaItem = this.db.list('/itens');
  }

  getItem(id_lista : string){
    var lista : Item[];
    this.ListaItem.snapshotChanges()
    .subscribe(item =>{
      item.forEach(el =>{
        if (el.payload.val().idLista.toString() == id_lista){
          lista.push(el.payload.val());
        }
      })
    });
    return lista;
  }

  setItem(titulo:string, lista_id: string){
    this.ListaItem.snapshotChanges()
    .subscribe(item =>{
      item.forEach(el =>{
        this.lastId = this.lastId + el.payload.val().id;
      })
    });
    this.item = new Item();
    this.item.id = this.lastId+1;
    this.item.titulo = titulo;
    this.item.checado = false;
    this.item.idLista = Number(lista_id);
    console.log(this.item);
    this.ListaItem.set('/'+this.item.id, this.item);
  }

  checkOrUnCheck($key : string, flag : boolean){
    this.db.object('/itens/'+$key).update({checado : flag});
  }

  deleteItem($key : string){
    this.db.object('/itens/'+$key).remove();
  }
}
