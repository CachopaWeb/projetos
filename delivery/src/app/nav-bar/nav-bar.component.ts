import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  totalItens : number = 0;
  constructor(private cartService : CartService) { }

  ngOnInit() {
    let item = this.cartService.getItensCart()
    this.totalItens = 0;
    item.forEach(() =>{
      this.totalItens += 1;
    });
  }

}
