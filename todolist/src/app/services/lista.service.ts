import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Lista } from '../entities/lista';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private listaItem : AngularFireList<Lista>;
  acesso: boolean;
  constructor(private db : AngularFireDatabase) { 
    this.listaItem = this.db.list('/lista');
  }

  getItem(){
    return this.listaItem;
  }

  setItem(vNome, vSenha : string, vId : number){
    this.listaItem.push({
      id:vId++,
      nome:vNome,
      senha:vSenha
    });
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
