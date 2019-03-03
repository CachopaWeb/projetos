import { Produtos } from "../entities/produtos";
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ProdutosService{
    public produtos: AngularFireList<Produtos>;
    constructor(private db : AngularFireDatabase){
        this.produtos = db.list('produtos');
        // this._produtos = [
        //     {id:1, nome:'X-Bacon Especial', valor:15.5, pro_emp:1, foto:'assets/imagens/lanche1.jpg', quantidade: 0},
        //     {id:2, nome:'X-Salada', valor:14, pro_emp:1, foto:'assets/imagens/lanche2.jpg',quantidade:0},
        //     {id:3, nome:'X-Bacon c/ Calabresa', valor:17.5, pro_emp:2, foto:'assets/imagens/lanche3.jpg', quantidade:0},
        //     {id:4, nome:'X-Egg', valor:16, pro_emp:2, foto:'assets/imagens/lanche4.jpg', quantidade:0}
        // ];
        // if (this.findAll('1').length == 0)
            // this.setProdutos();
    }
    
    setProdutos(){
        
    }

    getProdutos(){
        return this.produtos;
    }
}