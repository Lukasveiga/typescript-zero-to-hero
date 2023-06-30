export {};

// Exemplo 01:
class Funcionario {
  readonly dataNascimento: Date;

  constructor(dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

const funcionario: Funcionario = new Funcionario(new Date(1996, 8, 29));
//funcionario.dataNascimento = new Date();

// Exemplo 02:
class Funcionario1 {
  constructor(readonly dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

// Exemplo 03:
class Funcionario2 {
  nome: string;
  readonly condigoFuncionario: number;

  constructor(nome: string, condigoFuncionario: number) {
    this.nome = nome;
    this.condigoFuncionario = condigoFuncionario;
  }
}

const func = new Funcionario2("Lukas", 1);
func.nome = "Lukas Veiga";
//func.condigoFuncionario = 12;

// Exemplo 04: Interface
interface IFuncionario {
  nomeEmpregado: string;
  codigoFuncionario: number;
}

const func01: Readonly<IFuncionario> = {
  codigoFuncionario: 50,
  nomeEmpregado: "Lukas",
};

// func01.nomeEmpregado = "Lukas";

const func02: IFuncionario = {
  codigoFuncionario: 50,
  nomeEmpregado: "Lukas",
};
