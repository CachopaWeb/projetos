export class Produtos{
    constructor(
        public id: number,
        public nome: string,
        public valor: number,
        public pro_emp : number,
        public foto: File,
        public url_img: string,
        public quantidade: number,
        public descricao: string){}
}