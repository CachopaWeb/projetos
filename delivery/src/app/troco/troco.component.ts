import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-troco',
  templateUrl: './troco.component.html',
  styleUrls: ['./troco.component.css']
})
export class TrocoComponent implements OnInit {

  constructor(private cartService : CartService,
              private rota : Router) { }

  ngOnInit() {
  }

  finalizarPedido(){
    console.log(JSON.parse(localStorage.getItem('cart')));
    this.cartService.addItemCartFB(JSON.parse(localStorage.getItem('cart')));
    this.rota.navigateByUrl('empresas');
  }
}
