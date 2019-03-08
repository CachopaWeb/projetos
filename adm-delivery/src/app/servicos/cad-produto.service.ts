import { Injectable, EventEmitter } from '@angular/core';
import { Produtos } from '../models/produto';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class CadProdutoService {
  produtos: AngularFireList<Produtos>;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  
  private basePath:string = '/img_produtos';
  constructor(private db: AngularFireDatabase, private fireStorage: AngularFireStorage) {
    this.produtos = this.db.list('produtos');
   }

  getProduto(){
    return this.produtos
  }

  adicionarProduto(p: Produtos){
    this.ref = this.fireStorage.ref(this.basePath+'/'+p.foto.name);
    this.task = this.ref.put(p.foto);
    this.produtos.push(p);
  }

  excluir(key: any){
    this.db.object('/produtos/'+key)
    .remove()
    .then(
      ()=>{console.log('deletado com sucesso')},
      (error)=>{console.log(error)}
    );
  }
}
