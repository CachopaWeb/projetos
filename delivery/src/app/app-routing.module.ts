import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CartComponent } from './cart/cart.component';
import { EnderecoEntregaComponent } from './endereco-entrega/endereco-entrega.component';
import { TrocoComponent } from './troco/troco.component';
import { FormasPagtoComponent } from './formas-pagto/formas-pagto.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path : 'empresas', component : EmpresasComponent},
  {path : 'produtos/:id', component : ProdutosComponent},
  {path : 'cart', component : CartComponent},
  {path : 'endereco-entrega', component : EnderecoEntregaComponent},
  {path : 'troco', component : TrocoComponent},
  {path : 'Forma-pagto', component : FormasPagtoComponent},
  {path : 'form', component : FormComponent},
  {path : '', redirectTo : '/empresas', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
