export {};

// Exemplo 01: Básico uso type object
const pessoa = {
  nome: "Lukas",
  sobrenome: "Veiga",
  idade: 35,
  funcao: "Backend Web Developer",
};

console.log(pessoa);

// Exemplo 02: object com parâmetros de funcao (podem ser anônimos)
function onboarding01(funcionario: { nome: string }) {
  return `Seja bem-vindo ${funcionario.nome}.`;
}

console.log(onboarding01({ nome: "Lukas Veiga" }));

// Exemplo 04: object nomeados
interface Pessoa {
  nome: string;
  funcao: string;
}

function onboarding02(pessoa: Pessoa) {
  return `Seja bem-vindo ${pessoa.nome} no cargo de ${pessoa.funcao}.`;
}

console.log(
  onboarding02({ nome: "Lukas Veiga", funcao: "Backend Web Developer" })
);

// Exemplo 04: object com type alias
type Pessoa04 = {
  nome: string;
  funcao: string;
  linguagem: string;
};

function onboarding03(pessoa: Pessoa04) {
  return `Seja bem-vindo ${pessoa.nome} no cargo de ${pessoa.funcao} com a linguagem ${pessoa.linguagem}.`;
}

console.log(
  onboarding03({
    nome: "Lukas Veiga",
    funcao: "Backend Web Developer",
    linguagem: "TypeScript",
  })
);

// Exemplo 05: usando optional no object
interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  email?: string;
}

function onboarding04(pessoa: Pessoa05) {
  return `Seja bem-vindo ${pessoa.nome} no cargo de ${pessoa.funcao} com a linguagem ${pessoa.linguagem} ${pessoa.email}.`;
}

console.log(
  onboarding04({
    nome: "Lukas Veiga",
    funcao: "Backend Web Developer",
    linguagem: "TypeScript",
  })
);

// Exemplo 06: Proprieda readonly (same behaviour of final from java)
interface Pessoa06 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string;
}

function onboarding05(pessoa: Pessoa06) {
  return `Seja bem-vindo ${pessoa.nome} no cargo de ${pessoa.funcao} com a linguagem ${pessoa.linguagem}. Email: ${pessoa.email}.`;
}

console.log(
  onboarding05({
    nome: "Lukas Veiga",
    funcao: "Backend Web Developer",
    linguagem: "TypeScript",
    email: "lukas@email.com",
  })
);

// Exemplo 07: Tipos de extensões (heranças)
interface Mae {
  nome: string;
}

interface Pai {
  sobrenome: string;
}

interface Filha extends Mae, Pai {
  idade: number;
}

const filha: Filha = {
  nome: "Ana",
  sobrenome: "Julia",
  idade: 35,
};

console.log(filha);

// Exemplo 08: Tipos de Interseções
interface Cachorro {
  tipo: string;
}

interface Gato {
  tipo: string;
}

type Animal = Cachorro & Gato;

// Exemplo 09: Generics Objects
type Usuario = {
  nome: string;
  email: string;
};

type Admin = {
  nome: string;
  email: string;
  admin: true;
};

const usuario: Usuario = {
  nome: "Lukas",
  email: "lukas@email.com",
};

const admin: Admin = {
  nome: "Lukas",
  email: "lukas@email.com",
  admin: true,
};

function acessarSistema<T>(usuario: T): T {
  return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));
