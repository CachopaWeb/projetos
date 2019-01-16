import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../entities/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  ListaItem : AngularFireList<Item>;
  lastId : number = 0;
  constructor(private db : AngularFireDatabase) { 
    this.ListaItem = this.db.list('itens');  
  }

  getItem(id_lista : string){
    return this.ListaItem = this.db.list('itens/'+id_lista);
  }

  setItem(titulo:string, lista_id: string){
    this.ListaItem.snapshotChanges()
    .subscribe(item =>{
      item.forEach(el =>{
        this.lastId = this.lastId + el.payload.val().id;
      })
    });
    this.ListaItem.push({
    id: this.lastId+1,
    titulo: titulo,
    checado: false,
    idLista: Number(lista_id)});
  }

  checkOrUnCheck($key: string, idLista: string, flag : boolean){
    const itemRef = this.db.object('itens/'+idLista+'/'+$key);
    itemRef.update({checado : flag});        
  }

  deleteItem($key: string, idLista: string){
    const promisse = this.db.object('/itens/'+idLista+'/'+$key).remove();
    promisse.then(x =>{
      console.log('deletado com sucesso...')
    }).catch(e => console.log(e))
  }
}
