export {};

// Exemplo 01:
class Pessoa {
  nome: string;
  sobrenome: string;
  private idade: number;
  protected telefone: string;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    telefone: string
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.telefone = telefone;
  }

  getIdade(): number {
    return this.idade;
  }
}

class Estudante extends Pessoa {
  codigoEstudante: number;
  curso: string;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    telefone: string,
    codigoEstudante: number,
    curso: string
  ) {
    super(nome, sobrenome, idade, telefone);
    this.codigoEstudante = codigoEstudante;
    this.curso = curso;
  }

  retornaDadosEstudante(): string {
    return `Nome completo: ${this.nome} ${this.sobrenome}.
            Idade: ${this.getIdade()}.
            Telefone: ${this.telefone}
            Código do estudante: ${this.codigoEstudante}.
            Curso: ${this.curso}.`;
  }
}

const estudante: Estudante = new Estudante(
  "Lukas",
  "Veiga",
  26,
  "888",
  1,
  "Backend"
);
console.log(estudante.nome);
console.log(estudante.getIdade());
console.log(estudante.retornaDadosEstudante());
