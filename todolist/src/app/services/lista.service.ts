import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Lista } from '../entities/lista';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  listaItem : AngularFireList<Lista>;
  acesso: boolean;
  lastId: number = 0;
  lista: Lista;
  constructor(private db : AngularFireDatabase) { 
    this.listaItem = this.db.list('/lista');
  }

  getItem(){
    return this.listaItem;
  }

  setItem(vNome, vSenha : string){
    this.listaItem.snapshotChanges()
    .subscribe(item =>{
      item.forEach(el =>{
        this.lastId = this.lastId + el.payload.val().id;
      })
    });
    this.lista = new Lista();
    this.lista.id = this.lastId+1;
    this.lista.nome = vNome;
    this.lista.senha = vSenha;
    console.log(this.lista);
    this.listaItem.push(this.lista);
  }

  acessarLista($key, senha : string) : boolean{
    this.getItem().snapshotChanges()
    .subscribe(a =>{
      a.forEach(item =>{
        this.acesso = (item.payload.val().senha == senha);
      });
    });
    return this.acesso;
  }
}
