export {};

// Exemplo 01:
class Estudante<T, U extends number | string> {
  private nome: T;
  private id: U;

  setValor(nome: T, id: U): void {
    this.nome = nome;
    this.id = id;
  }

  retornarValor(): void {
    console.log(
      `Identificação do Estudante...: ${this.id}, Nome do Estudante...: ${this.nome}`
    );
  }
}

const estudante = new Estudante();
const estudante2 = new Estudante();

estudante.setValor("Lukas", 1);
estudante2.setValor("Lukas", "1");

estudante.retornarValor();
estudante2.retornarValor();
