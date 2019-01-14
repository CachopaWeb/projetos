import { Empresas } from '../entities/empresas';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { element } from '@angular/core/src/render3';

@Injectable()
export class EmpresaService{
    private empresas: AngularFireList<Empresas>;
    private _empresas : Empresas[];
    constructor(private FirebaseDB : AngularFireDatabase){
        this._empresas = [
            {id: 1, nome: 'Lanches e CIA', logo : 'assets/imagens/logotipo-lanchonete.png'},
            {id: 2, nome: 'Pizzas do Pops', logo : 'assets/imagens/logotipo-hanburguer.jpg'}
        ];
        if (this.findAll().length == 0){
            this.setEmpresas();
        }
    }

    findAll():Empresas[]{
        this.empresas = this.FirebaseDB.list('empresas');
        var e : Empresas[] = [];
        this.empresas.snapshotChanges().subscribe(item =>{
            item.forEach(el =>{
                e.push(el.payload.val());
            });
        });    
        return e;   
    }

    setEmpresas(){
        for (const emp in this._empresas) {
            if (this._empresas.hasOwnProperty(emp)) {
                const element = this._empresas[emp];
                this.empresas.push(element);
            }
        }
    }

    find(id:string){
        return this.empresas[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id:string){
        for(let i=0; i < this._empresas.length; i++)
        {
            if (this.empresas[i].id.toString() === id){
                return i;        
            }
        }
        return -1;
    }
}