import { Component, OnInit } from '@angular/core';
import { ListaService } from '../services/lista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  itens : any[] = [];
  nova_lista : boolean;
  constructor(private listaService : ListaService, private route : Router) { }

  ngOnInit() {
    this.listaService.getItem().snapshotChanges()
    .subscribe(i =>{
      this.itens = [];
      i.forEach(el => {
        let x = el.payload.toJSON();
        x["$key"] = el.key;
        this.itens.push(x);
      });
    });
    this.itens.sort((a, b) =>{
      return a.checado - b.checado;
    });
  }
  addLista(nome, senha : string, id : number){
    this.listaService.setItem(nome, senha, id);
    this.nova_lista = false;
  }

  AcessoLista($key, senha : string){
    // if (this.listaService.acessarLista($key, senha)){
      console.log('aqui..');
      this.route.navigate(['/todo', senha]);
    // }
  }
}
