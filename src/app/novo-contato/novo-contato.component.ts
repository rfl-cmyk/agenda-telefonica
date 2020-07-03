import { Component, OnInit } from '@angular/core';
import { ConexaoService } from '../crud/conexao.service';
import { Contato } from '../crud/contato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html'
})
export class NovoContatoComponent implements OnInit {
  valida: boolean;
  maskTEL = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private conexaoService: ConexaoService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  // adiciona um contato
  onSubmit(form) {
    var contato: Contato = form.value;
    if(!form.valid){
      this.valida = true;
    } else {
      this.valida = false;
      this.conexaoService.salvar(contato).subscribe(
        resultado => {
        alert('Contato criado com sucesso!');
        this.router.navigate(['/']);
        });
    }
  }

}
