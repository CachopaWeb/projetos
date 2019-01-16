import { Component, OnInit } from '@angular/core';
import { ListaService } from '../services/lista.service';
import { Router } from '@angular/router';
import { Lista } from '../entities/lista';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  itens$: Observable<Lista[]>;
  nova_lista : boolean;
  constructor(private listaService : ListaService, private route : Router) { }

  ngOnInit() {
    this.itens$ = this.listaService.getItem().valueChanges();
  }
  addLista(nome, senha : string){
    this.listaService.setItem(nome, senha);
    this.nova_lista = false;
  }

  AcessoLista(senha : string){
    this.itens$.subscribe(item =>{
      item.forEach(el =>{
        if (el.senha == senha){
          this.route.navigate(['/todo', el.id]);
        }else{
          alert('Senha incorreta!')
        }
      })
    })
  }
}
