import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})

export class ConexaoService {

  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Contato[]>(this.API);
  }

  listById(id: any) {
    return this.http.get<Contato[]>(`${this.API}/${id}`);
  }

  // adicionar contato
  salvar(contato) {
    return this.http.post(this.API, contato);
  }

  atualizar(id, contato) {
    return this.http.put(`${this.API}/${id}`, contato);
  }

  excluir(id: any) {
    return this.http.delete(`${this.API}/${id}`);
  }

}
