export {};

// Exemplo 01:
enum PorteAnimal {
  pequeno = "Pequeno",
  medio = "Médio",
  grande = "Grande",
}

abstract class Animal {
  nome: string;
  idade: number;
  porte: PorteAnimal;
}

interface Domestico extends Animal {
  levarParaPassear(): void;
  darBanho(): void;
  levarAoVeterinario(): void;
}

class Cachorro implements Domestico {
  nome: string;
  idade: number;
  porte: PorteAnimal;
  raca: string;

  constructor(nome: string, idade: number, porte: PorteAnimal, raca: string) {
    this.nome = nome;
    this.idade = idade;
    this.porte = porte;
    this.raca = raca;
  }

  levarParaPassear(): void {
    console.log(`Levar ${this.nome} para passear.`);
  }
  darBanho(): void {
    console.log(`Levar ${this.nome} para tomar banho.`);
  }
  levarAoVeterinario(): void {
    console.log(`Levar ${this.nome} ao veterinário.`);
  }
}

const cachorro = new Cachorro("Tob", 2, PorteAnimal.pequeno, "Beagle");
console.log(cachorro);
cachorro.levarParaPassear();

// Exemplo 02: Omit
interface Funcionario {
  id: number;
  nome: string;
  salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, "id"> {
  id: string;
  linguagemDeProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: "jst-12",
  nome: "Lukas",
  salario: 5200,
  linguagemDeProgramacao: "Java",
};

console.log(desenvolvedor);
