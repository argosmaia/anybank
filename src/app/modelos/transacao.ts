import { nanoid } from "nanoid";
import { TipoTransacao } from "../tipos/tipo-transacao";

export class Transacao {
    readonly id = nanoid();

    constructor(
        public readonly tipo: TipoTransacao,
        public readonly valor: number,
        public readonly data: Date = new Date()
    ) {}
}
