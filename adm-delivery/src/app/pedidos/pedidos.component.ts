import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/pedidos';
import { PedidosService } from '../servicos/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Pedidos[] = [];
  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    this.pedidosService.getPedidos().snapshotChanges()
    .subscribe(itens =>{
      this.pedidos = [];
      itens.forEach(el =>{
        this.pedidos.push(el.payload.val());
      });
    });
  }

}
