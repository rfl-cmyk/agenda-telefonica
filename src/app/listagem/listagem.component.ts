import { Component, OnInit } from '@angular/core';
import { ConexaoService } from '../crud/conexao.service';
import { Contato } from '../crud/contato';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html'
})

export class ListagemComponent implements OnInit {

  contatos: Contato[];

  constructor(private conexaoService: ConexaoService) { }

  ngOnInit() {
  	this.conexaoService.list().subscribe(dados => this.contatos = dados);
  }

}
