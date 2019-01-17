import { Component, OnInit } from '@angular/core';
import { ListaService } from '../services/lista.service';
import { Router } from '@angular/router';
import { Lista } from '../entities/lista';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { Item } from '../entities/item';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  itens$: Observable<Lista[]>;
  todo: Item[];
  itensLista : Lista[];
  nova_lista : boolean;
  id_sel : number;
  constructor(private listaService : ListaService, private todoService : TodoService, private route : Router) { }

  ngOnInit() {
    this.itens$ = this.listaService.getItem().valueChanges();
    this.itens$.subscribe(item =>{
      this.itensLista = [];
      item.forEach(el =>{
        this.itensLista.push(el);
      })
    });
  }
  addLista(nome, senha : string){
    this.listaService.setItem(nome, senha);
    this.nova_lista = false;
  }

  AcessoLista(senha : string){
    if (this.itensLista[this.id_sel].senha == senha){
      this.route.navigate(['/todo', this.itensLista[this.id_sel].id]);
    }else{
      alert('Senha incorreta!')
    }
  }

  delete(idLista: string){
    this.todoService.getItem(idLista).snapshotChanges()
    .subscribe(item =>{
      this.todo = [];
      item.forEach(el =>{
        this.todo.push(el.payload.val());
      })
      if (this.todo.length == 0){
        this.listaService.deleteItem(idLista);
      }else{
        this.route.navigate(['/todo', this.itensLista[this.id_sel].id]); 
        alert('Delete os itens da lista primeiro!');
      }
    })
  }
}
