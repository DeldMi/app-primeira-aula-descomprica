import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-primeira-aula';
  discricao1 = 0;

  valores = [{
    descricao: 'string',
    nome: 'string',
    id: 1
  },
  {
    descricao: 'string2',
    nome: 'string2',
    id: 2
  }
  ]

  clientePremio = false

  nome = ""
  id = 0
  descricao = ""

  adicionar() {
    this.valores.push({descricao: this.descricao, nome: this.nome, id: this.id})
  }
}

