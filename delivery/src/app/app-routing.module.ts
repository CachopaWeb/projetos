import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path : 'empresas', component : EmpresasComponent},
  {path : 'produtos/:id', component : ProdutosComponent},
  {path : 'cart', component : CartComponent},
  {path : '', redirectTo : '/empresas', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
