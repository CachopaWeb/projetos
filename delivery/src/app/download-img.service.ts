import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class DownloadImgService {
  ref: AngularFireStorageReference;
  private basePath:string = '/img_produtos/';
  
  constructor(private fireStorage: AngularFireStorage) {
  }

  getImagem(nome_arq: string){
    this.ref = this.fireStorage.ref(this.basePath+nome_arq);
    return this.ref.getDownloadURL();
  }
}
