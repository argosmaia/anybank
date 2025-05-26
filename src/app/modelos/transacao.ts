import { TipoTransacao } from "../tipos/tipo-transacao";

export class Transacao {
    constructor(
        public readonly tipo: TipoTransacao,
        public readonly valor: number
    ) {}
}
