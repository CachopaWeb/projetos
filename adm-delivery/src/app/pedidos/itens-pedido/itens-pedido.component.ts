import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itens-pedido',
  templateUrl: './itens-pedido.component.html',
  styleUrls: ['./itens-pedido.component.css']
})
export class ItensPedidoComponent implements OnInit {
  @Input() lista: any = [];
  constructor() { }

  ngOnInit() {
  }

}
