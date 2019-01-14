import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  itens : any[] = [];
  constructor(private todoService : TodoService, private route : RouterLinkActive) { }

  ngOnInit() {
    this.todoService.getItem().snapshotChanges()
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
  addItem(itemTitulo){
    this.todoService.setItem(itemTitulo.value, 1);
    itemTitulo.value = null;
  }

  alterCheck($key : string, isChecked : boolean){
    this.todoService.checkOrUnCheck($key, !isChecked);
  }

  delete(item : any){
    this.todoService.deleteItem(item.$key);
  }
}
