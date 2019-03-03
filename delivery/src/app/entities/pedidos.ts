import { Produtos } from './produtos';

export class Pedidos{
    id: number;
    data: string;
    hora: string;
    itens: Produtos[];
    valor: number;
    obs: string;
    tipo_entrega: string;
    end_entrega: string;
    troco: number;
}
