export {};

// Exemplo 01: typeof
type alfanumerico = string | number;

function exibirTipo(a: alfanumerico, b: alfanumerico) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error(
    "Argumentos inválidos! Ambos os argumentos precisam ser numéricos ou string."
  );
}

console.log(exibirTipo(2, 2));
console.log(exibirTipo("a", "b"));
//console.log(exibirTipo("a", 2));

// Exemplo 02: instanceof
class Carro {
  modelo: string;
  ano: number;
  cavalosPotencia: number;

  constructor(modelo: string, ano: number, cavalosPotencia: number) {
    this.modelo = modelo;
    this.ano = ano;
    this.cavalosPotencia = cavalosPotencia;
  }
}

class Moto {
  modelo: string;
  ano: number;
  cilindradas: number;

  constructor(modelo: string, ano: number, cilindradas: number) {
    this.modelo = modelo;
    this.ano = ano;
    this.cilindradas = cilindradas;
  }
}

function detalhesVeiculo(veiculo: Carro | Moto) {
  if (veiculo instanceof Carro) {
    return `O carro do modelo ${veiculo.modelo} do ano ${veiculo.ano} tem ${veiculo.cavalosPotencia} cavalos e potência.`;
  } else if (veiculo instanceof Moto) {
    return `A moto do modelo ${veiculo.modelo} do ano ${veiculo.ano} tem ${veiculo.cilindradas} cilindradas.`;
  }
}

const carro = new Carro("Fusca", 1989, 89);
const moto = new Moto("CBR", 2020, 300);

console.log(detalhesVeiculo(carro));
console.log(detalhesVeiculo(moto));

// Exemplo 03:
interface Animal {
  grupo: string;
}

class Peixe implements Animal {
  grupo: string;
  corPeixe: string;

  constructor(grupo: string, cor: string) {
    this.grupo = grupo;
    this.corPeixe = cor;
  }
}

class Ave implements Animal {
  grupo: string;
  corPena: string;

  constructor(grupo: string, corPena: string) {
    this.grupo = grupo;
    this.corPena = corPena;
  }
}

function nadar(grupo: string) {
  console.log(`O ${grupo} está nadando.`);
}

function voar(grupo: string) {
  console.log(`O ${grupo} está voando.`);
}

function mover(animal: Animal) {
  if ("corPeixe" in animal) {
    nadar(animal.grupo);
  } else if ("corPena" in animal) {
    voar(animal.grupo);
  }
}

const peixe = new Peixe("Peixe", "azul");
const passaro = new Ave("Pássaro", "roxo");

mover(peixe);
mover(passaro);
