import { Component, computed, input } from '@angular/core';
import { Transacao } from '../../modelos/transacao';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TipoTransacao } from '../../tipos/tipo-transacao';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})

export class TransacaoComponent {
  transacao = input.required<Transacao>();
  valor = computed(() => {
    if (this.transacao().tipo === TipoTransacao.SAQUE) {
      return -this.transacao().valor;
    }
    return this.transacao().valor;
  });
}
