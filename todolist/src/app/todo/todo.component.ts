import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from '../entities/item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  itens : Item[] = [];
  id : string;
  constructor(private todoService : TodoService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.id  = this.route.snapshot.paramMap.get('id');
    this.todoService.getItem(this.id.toString()).map(
      item =>{
        if (item.idLista.toString() == this.id.toString())
          this.itens.push(item);
      });
  }

  addItem(itemTitulo){
    this.todoService.setItem(itemTitulo.value, this.id);
    itemTitulo.value = null;
  }

  alterCheck($key : string, isChecked : boolean){
    this.todoService.checkOrUnCheck($key, !isChecked);
  }

  delete(item : any){
    this.todoService.deleteItem(item.$key);
  }
}
