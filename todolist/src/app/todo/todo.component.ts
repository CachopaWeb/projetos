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
  constructor(private todoService : TodoService, 
              private route : ActivatedRoute,
              private rota : Router) { }

  ngOnInit() {
    this.id  = this.route.snapshot.paramMap.get('id');
    this.todoService.getItem(this.id).snapshotChanges()
    .subscribe(item =>{
      item.forEach(el =>{
        var x = el.payload.toJSON();
        x['$key'] = el.key;
        console.log(x);
        this.itens.push(x)
      })
    })
  }

  addItem(itemTitulo){
    this.todoService.setItem(itemTitulo.value, this.id);
    itemTitulo.value = null;
  }

  alterCheck($key: string, idLista: string, isChecked : boolean){
    this.todoService.checkOrUnCheck($key, idLista, !isChecked);
    this.rota.navigate(['/todo', idLista]);
  }

  delete($key : string, idLista: string){
    this.todoService.deleteItem($key, idLista);
    this.rota.navigate(['/todo', idLista]);
  }
}
