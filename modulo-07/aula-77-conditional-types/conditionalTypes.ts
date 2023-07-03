export {};

// Exemplo 01:
type DataNascimento = string;
type Idade = number;

type InformacaoPessoa<T> = T extends number ? number : string;

const dataNascimento: InformacaoPessoa<DataNascimento> = "29/08/1996";
const idade: InformacaoPessoa<Idade> = 26;

console.log(dataNascimento);
console.log(idade);

// Exemplo 02:
type Pessoa = {
  nome: string;
  idade: number;
  cpf: number;
};

type Empresa = {
  nome: string;
  dataCriacao: Date;
  cnpf: number;
};

type EnderecoPessoa = {
  cidade: string;
  bairro: string;
  tipo: "casa" | "apartamento";
};

type EnderecoEmpresa = {
  cidade: string;
  bairro: string;
  tipo: "sede" | "empresarial";
};

type Endereco<T> = T extends { cpf: number } ? EnderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: Endereco<Pessoa> = {
  cidade: "São Paulo",
  bairro: "Castelo Branco",
  tipo: "casa",
};

const enderecoEmpresa: Endereco<Empresa> = {
  cidade: "São Paulo",
  bairro: "Centro",
  tipo: "empresarial",
};

console.log(enderecoPessoa);
console.log(enderecoEmpresa);
