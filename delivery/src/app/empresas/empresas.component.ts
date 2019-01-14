import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresas.service';
import { Empresas } from '../entities/empresas';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas : Empresas[];

  constructor(private empresaService : EmpresaService) { }

  ngOnInit() {
    this.empresas = this.empresaService.findAll();
  }
}
