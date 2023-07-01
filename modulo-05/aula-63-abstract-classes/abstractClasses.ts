export {};

// Exemplo 01:
abstract class Funcionario {
  constructor(private nome: string, private sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  abstract retornarSalario(): number;

  get retornarNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  emitirContraCheque(): string {
    return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
  }
}

class FuncionarioCLT extends Funcionario {
  constructor(nome: string, sobrenome: string, private salario: number) {
    super(nome, sobrenome);
    this.salario = salario;
  }

  retornarSalario(): number {
    return this.salario;
  }
}

class FuncionarioPJ extends Funcionario {
  constructor(
    nome: string,
    sobrenome: string,
    private valorHora: number,
    private horasTrabalhadas: number
  ) {
    super(nome, sobrenome);
    this.valorHora = valorHora;
    this.horasTrabalhadas = horasTrabalhadas;
  }
  retornarSalario(): number {
    return this.valorHora * this.horasTrabalhadas;
  }
}

const lukas = new FuncionarioCLT("Lukas", "Veiga", 5000);
const joao = new FuncionarioPJ("João", "Silva", 150, 40);
console.log(lukas.emitirContraCheque());
console.log(joao.emitirContraCheque());
