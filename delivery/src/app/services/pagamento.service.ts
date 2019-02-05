import {HttpClient, HttpHeaders, HttpHeaderResponse }  from '@angular/common/http'
import { Injectable }             from '@angular/core';
import { Dados }                  from '../entities/dados.class';


/* CLASSE SERVIÇO: RESPONSÁVEL POR ESTABELECER COMUNICAÇÃO COM O SERVIDOR */

@Injectable()
export class PagamentoService {
  constructor(private http: HttpClient) {}


  public startSession (){

      return this.http.get('http://www.suaApi.com.br/getIdSession');
  }

  public store (dados:Dados){

        let body = JSON.stringify({ dados });
        return this.http.post('http://www.suaApi.com.br/store', body);
  }

  public cancel (){

       return this.http.get('http://www.suaApi.com.br/cancel');
  }


}