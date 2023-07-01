export {};

// Exemplo 01:
class Funcionario {
  private static contratacoes = 0;

  constructor(
    private name: string,
    private sobrenome: string,
    private titulo: string
  ) {
    Funcionario.contratacoes++;
  }

  static numeroDeContratacoes() {
    return Funcionario.contratacoes;
  }
}

const funcionario1 = new Funcionario("Lukas", "Veiga", "Titulo 01");
const funcionario2 = new Funcionario("Lukas", "Veiga", "Titulo 02");
console.log(Funcionario.numeroDeContratacoes());
