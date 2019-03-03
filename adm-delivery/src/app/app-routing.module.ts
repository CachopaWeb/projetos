import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  {path: 'login', component : LoginComponent},
  {path: 'cad-produto', component : CadastroProdutoComponent},
  {path: 'pedidos', component : PedidosComponent},
  {path:'', redirectTo : 'login', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
