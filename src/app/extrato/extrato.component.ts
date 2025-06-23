import { Component, input } from '@angular/core';
import { Transacao } from '../modelos/transacao';
import { TransacaoComponent } from './transacao/transacao.component';

@Component({
  selector: 'app-extrato',
  imports: [TransacaoComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent {
  transacoes = input.required<Transacao[]>();
}
