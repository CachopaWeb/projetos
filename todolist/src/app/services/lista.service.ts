import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Lista } from '../entities/lista';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

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
    this.listaItem.set('/'+this.lista.id, this.lista);
  }

  acessarLista(senha : string) : number{
    var id : number = 0;
    this.getItem().snapshotChanges()
    .subscribe(item => {
        item.map(mp =>{
          if (mp.payload.val().senha == senha){
            id = mp.payload.val().id;
          }
        })
      }
    );
    return id;
  }
}
