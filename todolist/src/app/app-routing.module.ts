import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path : 'todo',  component : TodoComponent},
  { path : 'todo/:id',  component : TodoComponent},
  {path : 'lista', component : ListaComponent},
  { path : '', redirectTo : '/lista', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
