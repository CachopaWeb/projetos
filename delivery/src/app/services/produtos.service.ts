import { Produtos } from "../entities/produtos";
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ProdutosService{
    public _produtos : Produtos[];
    public produtos: AngularFireList<Produtos>;
    constructor(private FirebaseDB : AngularFireDatabase){
        this._produtos = [
            {id:1, nome:'X-Bacon Especial', valor:15.5, pro_emp:1, foto:'assets/imagens/lanche1.jpg'},
            {id:2, nome:'X-Salada', valor:14, pro_emp:1, foto:'assets/imagens/lanche2.jpg'},
            {id:3, nome:'X-Bacon c/ Calabresa', valor:17.5, pro_emp:2, foto:'assets/imagens/lanche3.jpg'},
            {id:4, nome:'X-Egg', valor:16, pro_emp:2, foto:'assets/imagens/lanche4.jpg'}
        ];
        if (this.findAll('1').length == 0)
            this.setProdutos();
    }
    
    setProdutos(){
        for (const p in this._produtos) {
            if (this._produtos.hasOwnProperty(p)) {
                const element = this._produtos[p];
                this.produtos.push(element);
            }
        }
    }
    
    findAll(emp_id:string){
        this.produtos = this.FirebaseDB.list('produtos');
        var p : Produtos[] = [];
        this.produtos.snapshotChanges()
        .subscribe(item =>{
            item.forEach(element =>{
                if (element.payload.val().pro_emp.toString() == emp_id)
                    p.push(element.payload.val());            
            })
        });
        return p;
    }

    // findAll(emp_id:string){
    //     let p : Produtos[] = [];
    //     for (const prod in this._produtos) {
    //         if (this._produtos.hasOwnProperty(prod)) {
    //             if(this._produtos[prod].pro_emp.toString() == emp_id){
    //                 p.push(this._produtos[prod]);
    //             }
    //         }
    //     }
    //     return p;
    // }

    find(id:string){
        return this._produtos[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id:string){
        for(let i=0; i < this._produtos.length; i++)
        {
            if (this._produtos[i].id.toString() == id){
                return i;        
            }
        }
        return -1;
    }
}