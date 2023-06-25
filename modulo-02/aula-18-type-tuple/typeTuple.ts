// Exemplo 01: Uso simples de Tuple em TS
let pessoa: [string, string, number];
pessoa = ["Lukas", "Backend web developer", 26];

console.log(pessoa);

// Exemplo 02: Acessando elementos da tuple
let pessoa1: [string, string, number];
pessoa1 = ["Lukas", "Backend web developer", 26];

console.log(pessoa1[0]);

// Exemplo 03: Outra forma de usar tuple em TS
let pessoa2: [nome: string, posicao: string, idade: number];
pessoa2 = ["Lukas", "Backend web developer", 26];

console.log(pessoa2);

// Exemplo 04: Tules com Spread operator
let listaFrutas: [string, ...string[]] = ["banana", "abacaxi", "uva", "maçã"];
console.log(...listaFrutas);

// Exemplo 05: Lista heterogênea
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// Exemplo 06: Uso de função com Tuples
function listarPessoas(nomes: string[], idades: number[]) {
  return [...nomes, ...idades];
}

let resultado = listarPessoas(["Lukas", "Natalia"], [26, 24]);
console.log(resultado);

// Exemplo 07: Labeled Tuples com Spread Operator em uma função
type Nome =
  | [primeiroNome: string, sobrenome: string]
  | [primeiroNome: string, nomeMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome) {
  return [...nome];
}

console.log(criarPessoa("Lukas", "Veiga"));
console.log(criarPessoa("Lukas", "Barbosa", "Veiga"));
