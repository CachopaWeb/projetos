export class Dados{

    public id:number;
    public nome:string       = 'Alessandro Dutra de Andrade';
    public telefone:string   = '(67) 99999-9999';
    public email:string      = 'teste@sandbox.pagseguro.com.br';
    public cpf:string        = '957.937.874-61';
    public nascimento:string = '01/09/1990';
    public logradouro:string = 'Av 9 de Julho';
    public numero:string     = '45';
    public bairro:string     = 'Centro';
    public cep:string        = '79700-000';
    public cidade:string     = 'Fátima do Sul';
    public estado:string     = 'ms';
    public numCard:string;              //ex: '4111111111111111'      
    public mesValidadeCard:string;      // ex: '12';
    public anoValidadeCard:string;      // ex: '2030';
    public codSegCard:string;           // ex: '123';
    public hashComprador:string;        // preenchido dinamicamente
    public bandCard:string;             // preenchido dinamicamente
    public hashCard:string;             // preenchido dinamicamente
    public parcelas:Array<Object> = []; // preenchido dinamicamente

    constructor(obj?) {
        
        Object.assign(this, obj, {}, {});
    }
}

