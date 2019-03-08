import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/pedidos';
import { PedidosService } from '../servicos/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  preserveWhitespaces: true
})
export class PedidosComponent implements OnInit {
  pedidos: any[] = [];
  selectedItem : any;
  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    this.pedidosService.getPedidos().snapshotChanges()
    .subscribe(itens =>{
      this.pedidos = [];
      itens.forEach(el =>{
        let x = el.payload.val();
        x['$key'] = el.key;
        this.pedidos.push(x);
      });
    });
  }

  onSelect(itens: any){
    console.log(itens);
    this.selectedItem = itens;
  }

  aceite(pedido: any){
    pedido.aceito = !pedido.aceito;
    console.log(pedido);
    this.pedidosService.RespostaAceite(pedido.$key, pedido.aceito)
  }
}
