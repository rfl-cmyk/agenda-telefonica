import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';
import { ContatoComponent } from './contato/contato.component';
import { ConexaoService } from './crud/conexao.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    NovoContatoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [ConexaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
