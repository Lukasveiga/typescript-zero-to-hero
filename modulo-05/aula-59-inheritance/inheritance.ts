export {};

// Exemplo 01:
class Animal {
  mover(distancia = 0) {
    console.log(`Animal se moveu...: ${distancia} metros.`);
  }
}

class Cachorro extends Animal {
  latir() {
    console.log("Au au!");
  }
}

const cachorro = new Cachorro();
cachorro.latir();
cachorro.mover(10);

// Exemplo 02:
class Pessoa {
  private _nome: string;
  private _sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this._nome = nome;
    this._sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return `${this._nome} ${this._sobrenome}`;
  }

  get nome(): string {
    return this._nome;
  }
  get sobrenome(): string {
    return this._sobrenome;
  }
}

class Funcionario extends Pessoa {
  private _funcao: string;

  constructor(nome: string, sobrenome: string, funcao: string) {
    super(nome, sobrenome);
    this._funcao = funcao;
  }

  get funcao(): string {
    return this._funcao;
  }
}

const funcionario = new Funcionario("Lukas", "Veiga", "Back-end Dev Web");
console.log(funcionario.nomeCompleto());
console.log(funcionario.funcao);
