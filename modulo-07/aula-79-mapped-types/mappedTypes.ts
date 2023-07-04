export {};

// Exemplo 01: Mapped Types
type User = {
  nome: string;
  endereco: string;
  telefone: string;
  idade: number;
};

type UserOptional = { [K in keyof User]?: User[K] };

type UserReadOnly = { readonly [K in keyof User]: User[K] };

const user01: UserOptional = {
  nome: "Lukas",
  idade: 26,
};

console.log(user01);

const user02: UserReadOnly = {
  nome: "Lukas",
  endereco: "Rua 01",
  telefone: "55884655",
  idade: 26,
};

// user02.nome = "João"; --> Error

console.log(user02);

// Exemplo 02:
interface Livro {
  titulo: string;
  autor: string;
  preco: number;
  numeroPaginas: number;
}

type Artigo = Omit<Livro, "numeroPaginas">;

type LivroReadOnly = Readonly<Livro>;
