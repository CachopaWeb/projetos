import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CartComponent } from './cart/cart.component';
import { ProdutosService } from './services/produtos.service';
import { EmpresaService } from './services/empresas.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EnderecoEntregaComponent } from './endereco-entrega/endereco-entrega.component';
import { TrocoComponent } from './troco/troco.component';
import { FormasPagtoComponent } from './formas-pagto/formas-pagto.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { PagamentoService } from './services/pagamento.service';
import { VariableGlobal } from './services/variable.global.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    ProdutosComponent,
    CartComponent,
    NavBarComponent,
    EnderecoEntregaComponent,
    TrocoComponent,
    FormasPagtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'app-delivery'),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProdutosService,
    EmpresaService,
    PagamentoService,
    VariableGlobal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
