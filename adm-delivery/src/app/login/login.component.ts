import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  constructor(private rota: Router) { }

  ngOnInit() {
    this.frmLogin = new FormGroup({
      email: new FormControl('convidado@gmail.com'),
      senha: new FormControl('')
    });
  }

  onSubmit(){
    console.log(this.frmLogin.value);
    if ((this.frmLogin.value.email == "convidado@gmail.com") && (this.frmLogin.value.senha == "123")){
      this.rota.navigateByUrl('/cad-produto');
    }else{
      alert('Usuário ou senha incorreto!')
    }
  }
}
