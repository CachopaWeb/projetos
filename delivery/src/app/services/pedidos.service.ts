import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Pedidos } from './../entities/pedidos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidos: AngularFireList<Pedidos>;
  constructor(private db: AngularFireDatabase) {
    this.pedidos = db.list('pedidos');
  }

  EnviarPedidos(pedido: Pedidos){
    this.pedidos.push(pedido);
  }
}
