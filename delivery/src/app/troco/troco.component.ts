import { Produtos } from './../entities/produtos';
import { PedidosService } from './../services/pedidos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../entities/item';
import { Pedidos } from '../entities/pedidos';

@Component({
  selector: 'app-troco',
  templateUrl: './troco.component.html',
  styleUrls: ['./troco.component.css']
})
export class TrocoComponent implements OnInit {
  pedido: Pedidos;
  constructor(private pedidoService: PedidosService,
              private rota : Router) { }

  ngOnInit() {
  }

  finalizarPedido(){
    const cart: Item[] = JSON.parse(localStorage.getItem('cart'));
    this.pedido = new Pedidos();
    cart.forEach(el =>{
      console.log(el);
      this.pedido.itens = [];
      this.pedido.itens.push(el.produto);
    });
    this.pedido.data = new Date().toString();
    this.pedido.hora = new Date('hh:mm:ss').toString();
    this.pedido.id = 1;
    this.pedido.obs = 'teste';
    this.pedido.end_entrega = 'Rua teste';
    this.pedido.tipo_entrega = 'Entregador';
    this.pedidoService.EnviarPedidos(this.pedido);
    this.rota.navigateByUrl('empresas');
  }
}
