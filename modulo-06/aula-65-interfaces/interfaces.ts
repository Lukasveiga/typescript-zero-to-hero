export {};

// Exemplo 01: Interface simples
interface Pessoa {
  nome: string;
  sobrenome: string;
  readonly idade?: number;
}

const lukas: Pessoa = {
  nome: "Lukas",
  sobrenome: "Veiga",
  //idade: 26,
};

//lukas.idade = "26"; --> I can't reassign

//console.log(exibirNome(lukas));

function exibirNome(pesso: Pessoa) {
  return `
    Nome...: ${pesso.nome}
    Sobrenome...: ${pesso.sobrenome}
    Idade...: ${pesso.idade}`;
}

// Exemplo 02: Interface implements
interface IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;

  comer(tipoComida: string): void;
}

class Gato implements IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;

  constructor(nome: string, idade: number, estaVivo: boolean) {
    this.nome = nome;
    this.idade = idade;
    this.estaVivo = estaVivo;
  }

  comer(tipoComida: string): void {
    console.log(`${this.nome} está comendo ${tipoComida}`);
  }
}

const gato = new Gato("Botas", 4, true);
gato.comer("bolacha");
