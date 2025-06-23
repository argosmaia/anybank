import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { Transacao } from './modelos/transacao';
import { TipoTransacao } from './tipos/tipo-transacao';
import { ExtratoComponent } from './extrato/extrato.component';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => { 
    return this.transacoes().reduce(
      (acumulador, transacaoAtual) => { 
        switch (transacaoAtual.tipo) {
          case TipoTransacao.DEPOSITO:
            return acumulador + transacaoAtual.valor;
          
          case TipoTransacao.SAQUE:
            return acumulador - transacaoAtual.valor;

          default:
            throw new Error('Método não identificado!');
        }
      }, 0)
      }
  );

  processarTransacao(transacao: Transacao) {
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]
    );
  }
}
