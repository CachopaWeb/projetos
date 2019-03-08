import { Injectable } from '@angular/core';
import { Pedidos } from '../models/pedidos';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidos: AngularFireList<Pedidos>;
  constructor(private db: AngularFireDatabase) {
    this.pedidos = db.list('pedidos');
  }

  getPedidos(){
    return this.pedidos;
  }

  RespostaAceite($key: any, resposta: boolean){
    console.log($key, resposta)
    this.db.object('/pedidos/'+$key).update({aceito:resposta});
  }
}
