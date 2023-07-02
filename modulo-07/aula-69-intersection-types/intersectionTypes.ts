export {};

// Exemplo 01:
interface DadosBancarios {
  conta: number;
  agencia: number;
  banco: string;
}

interface Cliente {
  nome: string;
  email: string;
}

interface DadosPessoaFisica {
  cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const cliente01: DadosCliente = {
  conta: 123,
  agencia: 15,
  banco: "Brasil",
  nome: "José",
  email: "jose@email.com",
  cpf: 120558874563,
};

console.table(cliente01);
