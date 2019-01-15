import { Component, OnInit } from '@angular/core';
import { ListaService } from '../services/lista.service';
import { Router } from '@angular/router';
import { Lista } from '../entities/lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  itens : Lista[] = [];
  nova_lista : boolean;
  constructor(private listaService : ListaService, private route : Router) { }

  ngOnInit() {
    this.listaService.getItem().snapshotChanges()
    .subscribe(i =>{
      this.itens = [];
      i.forEach(el => {
        this.itens.push(el.payload.val());
      });
    });
    this.itens.sort((a, b) =>{
      return a.id - b.id;
    });
  }
  addLista(nome, senha : string){
    this.listaService.setItem(nome, senha);
    this.nova_lista = false;
  }

  AcessoLista($key, senha : string){
    // if (this.listaService.acessarLista($key, senha)){
      this.route.navigateByUrl('/todo');
    // }
  }
}
