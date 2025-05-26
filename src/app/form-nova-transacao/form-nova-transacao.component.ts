import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transacao } from '../modelos/transacao';
import { TipoTransacao } from '../tipos/tipo-transacao';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  
  valor: number = 0;
  tipoTransacao = "saque";
  valorTransacao = "50";

  onValorInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const valor = parseFloat(input.value);

    if(!isNaN(valor)) this.valor = Math.round(valor * 100) / 100;
  }

  transacaoCriada = output<Transacao>();

  aoSubmeter() {
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );
    this.transacaoCriada.emit(transacao);
    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
