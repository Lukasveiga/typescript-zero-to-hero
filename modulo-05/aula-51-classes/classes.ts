export {};

// Exemplo 01:
class Pessoa {
  nome: string;
  sobrenome: string;

  constructor(nome: string = "", sobrenome: string = "") {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomecompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa: Pessoa = new Pessoa("Lukas", "Veiga");
console.log(pessoa.nomecompleto());

const pessoa2: Pessoa = new Pessoa();
console.log(pessoa2);

// Exemplo 02: Classe sem o constructor
class Estudante {
  codidoEstudante: number;
  nomeEstudante: string;
}

const estudante: Estudante = new Estudante();
estudante.codidoEstudante = 1;
estudante.nomeEstudante = "Lukas";

console.log(`Código do estudante: ${estudante.codidoEstudante}`);
console.log(`Nome do estudante: ${estudante.nomeEstudante}`);

// Exemplo 03: Com constructor
class Estudante1 {
  codidoEstudante: number;
  nomeEstudante: string;

  constructor(
    codigoEstudante: number = 0,
    nomeEstudante: string = "unknown name"
  ) {
    this.codidoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
  }

  listarEstudante(): void {
    console.log(`Código do estudante: ${this.codidoEstudante}`);
    console.log(`Nome do estudante: ${this.nomeEstudante}`);
  }
}

const estudante1: Estudante1 = new Estudante1(1, "Lukas Est 01");
estudante1.listarEstudante();

const estudante2: Estudante1 = new Estudante1();
estudante2.listarEstudante();
