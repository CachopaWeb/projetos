import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Item } from '../entities/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  itens : any[] = [];
  id : string;
  inserir : boolean = false;
  constructor(private todoService : TodoService, 
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.id  = this.route.snapshot.paramMap.get('id');
    this.todoService.getItem(this.id).snapshotChanges()
    .subscribe(item =>{
      this.itens = [];
      item.forEach(el =>{
        var x = el.payload.toJSON();
        if (x){
          x['$key'] = el.key;
          console.log(x);
          this.itens.push(x)
        }
      })
    })
  }

  addItem(itemTitulo){
    this.todoService.setItem(itemTitulo.value, this.id);
    itemTitulo.value = null;
    this.inserir = false;
  }

  alterCheck($key: string, idLista: string, isChecked : boolean){
    this.todoService.checkOrUnCheck($key, idLista, !isChecked);
    // window.location.reload();
  }

  delete($key : string, idLista: string){
    this.todoService.deleteItem($key, idLista);
    // window.location.reload();
  }
}
