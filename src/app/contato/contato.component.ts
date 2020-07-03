import { ConexaoService } from './../crud/conexao.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from '../crud/contato';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html'
})
export class ContatoComponent implements OnInit {

  contato: Contato[];
  id: any;
  inscricao: Subscription;
  formulario: any;
  valida: boolean;
  maskTEL = ['(', /[1-9]/, /\d/, ')', ' ', /\d/,/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private conexaoService: ConexaoService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    // pega o id da url
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );

    // conecta com o BD, recupera apenas um item de acordo com o ID da URL
    this.conexaoService.listById(this.id).subscribe(dados => this.contato = dados);
  }

  deletar(x) {
    this.conexaoService.excluir(x).subscribe(
      resultado => {
        alert('Contato excluído com sucesso.');
      },
      erro => {
        if(erro.status == 404) {
          alert('Contato não localizado.');
        }
      }
    );
  }

  // atualiza o contato
  onSubmit(form) {
    var contato: Contato = form.value;
    if(!form.valid){
      this.valida = true;
    } else {
        this.valida = false;
        this.conexaoService.atualizar(this.id, contato)
          .subscribe(
            resultado => {
              alert('Contato alterado com sucesso.');
              this.router.navigate(['/']);
            },
            erro => {
              switch(erro.status) {
                case 400:
                  console.log(erro.error.mensagem);
                  break;
                case 404:
                  alert('Contato não localizado.');
                  break;
              }
            }
          );
      }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}

