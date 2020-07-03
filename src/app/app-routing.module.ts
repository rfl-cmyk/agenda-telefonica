import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemComponent } from './listagem/listagem.component';
import { ContatoComponent } from './contato/contato.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';


const routes: Routes = [
  { path: '', component: ListagemComponent },
  { path: 'contato/:id', component: ContatoComponent },
  { path: 'novo-contato', component: NovoContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
