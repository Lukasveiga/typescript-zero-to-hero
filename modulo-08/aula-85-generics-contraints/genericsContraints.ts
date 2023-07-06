export {};

// Exemplo 01:
function juntarObjetos<U, V>(objeto1: U, objeto2: V) {
  return {
    ...objeto1,
    ...objeto2,
  };
}

const pessoa = juntarObjetos(
  {
    nome: "Lukas",
  },
  {
    idade: 26,
  }
);

console.log(pessoa);

// Exemplo 02:
function juntarObjetos2<U extends object, V extends object>(
  objeto1: U,
  objeto2: V
) {
  return {
    ...objeto1,
    ...objeto2,
  };
}

const pessoa2 = juntarObjetos2(
  {
    nome: "Lukas",
  },
  {
    idade: 26,
  }
);

console.log(pessoa2);

/* const pessoa3 = juntarObjetos2(
  {
    nome: "Lukas",
  },
  26
);

console.log(pessoa3); */

// Exemplo 03:
function prop<T, K extends keyof T>(objeto: T, chave: K) {
  return objeto[chave];
}

const nome = prop({ nome: "Lukas" }, "nome");

console.log(nome);
